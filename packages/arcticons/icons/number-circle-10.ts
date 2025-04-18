import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNumberCircle10Icon],svg[arcticons-number-circle-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m14.368 18.178l4-2.178v16m14.01-14.116l-8.104 12.232"></svg:path><svg:rect width="10.6" height="16" x="23.032" y="16" rx="5.3" ry="5.3"></svg:rect></svg:g>`,
})
export class ArcticonsNumberCircle10Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
