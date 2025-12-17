import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.PROJECT_URL!,
    process.env.SUPABASE_APY_KEY!,
    {
      cookies: {
        getAll: () => {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch (err) {
            throw new Error('')
          }
        }
      }
    }
  )
}