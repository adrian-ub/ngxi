import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceLoungeIcon],svg[guidance-lounge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M22 23.5c-1 0-1.75-1.5-1.75-1.5c-.75-1.5-.75-2.5-.75-4v-1.5h-9L8.621 8.985a2 2 0 0 1 1.94-2.485h.939l4 8m1 5.5h-5a4.64 4.64 0 0 1-4.504-3.517L3 .5m6.195 4s-1.81-.557-2.135-1.776A1.77 1.77 0 0 1 8.302.561a1.75 1.75 0 0 1 2.146 1.25c.324 1.219-.962 2.61-.962 2.61z"></svg:path>`,
})
export class GuidanceLoungeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
