import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShondhaWallsIcon],svg[arcticons-shondha-walls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.216 29.785c3.111 6.224 6.912 6.737 11.634 6.737c4.235 0 7.934-2.142 7.934-6.863c0-7.935-17.378-5.66-17.378-12.878c0-3.188 3.23-5.303 7.497-5.303c2.882 0 6.041.924 9.102 4.965"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsShondhaWallsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
