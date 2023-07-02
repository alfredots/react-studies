/* eslint-disable @typescript-eslint/no-empty-function */
import { Check, Rocket, X } from 'lucide-react';

import { Notification } from 'components/Notification';

function CompositionPattern() {
  return (
    <div className="w-100 h-screen flex items-center justify-center">
      <div className=" w-1/2 flex flex-col gap-2">
        <Notification.Root>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="lorem ipsum" />
          <Notification.Actions>
            <Notification.Action
              icon={Check}
              onClick={() => {
                console.log('foi');
              }}
            />
          </Notification.Actions>
        </Notification.Root>
        <Notification.Root>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="lorem ipsum 2" />
          <Notification.Actions>
            <Notification.Action icon={X} onClick={() => {}} />
            <Notification.Action
              icon={Check}
              onClick={() => {}}
              className="dark:bg-violet-500 dark:hover:bg-violet-600"
            />
          </Notification.Actions>
        </Notification.Root>
      </div>
    </div>
  );
}

export default CompositionPattern;
