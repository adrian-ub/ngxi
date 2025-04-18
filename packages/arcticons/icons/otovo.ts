import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOtovoIcon],svg[arcticons-otovo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 33.214V45.5m0-43v12.286m15.203-5.989l-8.687 8.688M45.5 24H33.214m5.989 15.203l-8.687-8.687"></svg:path><svg:ellipse cx="11.5" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9" ry="9.5"></svg:ellipse>`,
})
export class ArcticonsOtovoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
