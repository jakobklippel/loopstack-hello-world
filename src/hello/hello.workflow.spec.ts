import { describe, expect, it } from 'vitest';
import { runWorkflow } from '@loopstack/testing';
import { HelloWorkflow } from './hello.workflow.js';

describe('HelloWorkflow', () => {
  it('greets by name', async () => {
    const run = await runWorkflow(HelloWorkflow, { name: 'Ada' });
    expect(run.status).toBe('completed');
    expect(run.result).toMatchObject({ greeting: 'Hello, Ada! 👋' });
  });
});
