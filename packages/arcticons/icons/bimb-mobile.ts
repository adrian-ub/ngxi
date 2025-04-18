import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBimbMobileIcon],svg[arcticons-bimb-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="27.796" cy="27.796" r="11.908" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.092c-2.973 0-5.743.84-8.113 2.276V12.09A7.59 7.59 0 0 0 8.296 4.5v23.296C8.296 36.469 15.326 43.5 24 43.5s15.704-7.03 15.704-15.704S32.674 12.092 24 12.092"></svg:path><svg:circle cx="27.796" cy="27.796" r="11.908" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.776 20.04a8.5 8.5 0 0 1 3.363-.69c4.654 0 8.441 3.787 8.441 8.441a8.44 8.44 0 0 1-8.441 8.442a8.5 8.5 0 0 1-3.363-.69"></svg:path>`,
})
export class ArcticonsBimbMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
