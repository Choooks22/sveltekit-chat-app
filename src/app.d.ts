/// <reference types="@sveltejs/kit" />

/**
 * @see {@link https://kit.svelte.dev/docs/types#app}
 */
declare namespace App {
  interface Locals {
    wss: import('$lib/ws').default
    prisma: import('@prisma/client').PrismaClient
    messages: import('@prisma/client').PrismaClient['message']
    users: import('@prisma/client').PrismaClient['user']
  }
  interface Session {
    id: string
    username: string
  }
}
