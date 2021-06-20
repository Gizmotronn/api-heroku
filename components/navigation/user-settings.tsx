import React from 'react';
import { Popover, Link } from '@geist-ui/react';

const UserSettings: React.FC = () => (
  <>
    <Popover.Item title>
      <span>User Settings</span>
    </Popover.Item>
    <Popover.Item>
      <Link href="keybase://chat/signalkinetics#general/32">🛰 Teams</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="https://github.com/signal-k">👾 GitHub</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="https://glitch.com/@signal-k">🤖 Glitch</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="https://app.netlify.com/teams/irisdroidology/overview">🗂 Netlify</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="https://dashboard.heroku.com/auth/heroku/callback?code=1270f733-daa5-4a7c-94a0-c503f6c4cb2d">🦸🏻‍♂️ Heroku</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="http://replit.com"> ♊️ Repl.it</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="https://3.basecamp.com/3186433/projects/22655692">🎯 Basecamp</Link>
    </Popover.Item>
    <Popover.Item line />
    <Popover.Item>
      <Link href="http://ar.skinetics.tech">🌱 Root</Link>
    </Popover.Item>
  </>
);

export default UserSettings;
