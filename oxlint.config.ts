import { defineConfig } from 'oxlint';
import { typescript, config, vitest } from '@rivuty/oxlint-config';

export default defineConfig({
  extends: [typescript, config, vitest],
});
