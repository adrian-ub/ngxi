import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAddTeam02Icon],svg[hugeicons-add-team-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.246 7.5a4.26 4.26 0 0 0 4.25 4.25a4.26 4.26 0 0 0 4.25-4.25a4.26 4.26 0 0 0-4.25-4.25a4.26 4.26 0 0 0-4.25 4.25m1.5 0c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75s-2.75-1.23-2.75-2.75M2.246 20c0 .41.34.75.75.75s.75-.34.75-.75v-2.03c0-.84.33-1.88 1.25-2.3c2.3-1.04 5.29-1.21 7.79-.46c.39.12.81-.11.93-.5s-.1-.81-.5-.93c-2.84-.85-6.2-.66-8.84.53c-1.32.6-2.13 2-2.13 3.66zm12.249-8.4c-.32 0-.62-.21-.72-.54c-.12-.4.11-.81.5-.93a2.73 2.73 0 0 0 1.96-2.63c0-1.22-.81-2.3-1.96-2.64a.744.744 0 0 1-.5-.93c.12-.4.54-.62.93-.5c1.79.53 3.04 2.21 3.04 4.08s-1.22 3.53-3.04 4.07q-.105.03-.21.03zm2.751 8.4c0 .41.34.75.75.75s.75-.34.75-.75v-2.25h2.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25V14c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.25h-2.25c-.41 0-.75.34-.75.75s.34.75.75.75h2.25z" color="currentColor"></svg:path>`,
})
export class HugeiconsAddTeam02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
