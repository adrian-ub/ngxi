import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOne2Icon],svg[arcticons-one-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="6.617" height="8.768" x="10.5" y="27.213" rx="3.309" ry="3.309"></svg:rect><svg:path d="M27.304 35.981v-5.46a3.31 3.31 0 0 0-3.308-3.308h0a3.31 3.31 0 0 0-3.309 3.309m0 5.459v-8.768m16.379 7.099a3.31 3.31 0 0 1-2.875 1.67h0a3.31 3.31 0 0 1-3.308-3.31v-2.15a3.31 3.31 0 0 1 3.308-3.309h0a3.31 3.31 0 0 1 3.309 3.309v1.075h-6.617"></svg:path><svg:circle cx="29.62" cy="16.959" r="4.94"></svg:circle></svg:g><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsOne2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
