import {
  Cell,
  Reactive,
  Resource,
  type ResourceBlueprint,
} from "@starbeam/core";

// #region define-resource
function ChannelResource(
  channelName: Reactive<string>
): ResourceBlueprint<string> {
  return Resource((resource) => {
    const lastMessage = Cell(null as string | null);

    resource.on.setup(() => {
      const channel = Channel.subscribe(channelName.read());

      channel.onMessage((message) => {
        lastMessage.set(message);
      });

      return () => channel.unsubscribe();
    });

    return () => {
      const prefix = `[${channelName.read()}] `;
      if (lastMessage.current === null) {
        return `${prefix} No messages received yet`;
      } else {
        return `${prefix} ${lastMessage.current}`;
      }
    };
  });
}

declare class Channel {
  static subscribe(name: string): Channel;

  onMessage(handler: (message: string) => void): void;
  unsubscribe(): void;
}
// #endregion
