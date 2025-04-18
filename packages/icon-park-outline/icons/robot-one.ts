import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRobotOneIcon],svg[icon-park-outline-robot-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="30" height="24" x="9" y="18" stroke="currentColor" stroke-width="4" rx="2"></svg:rect><svg:circle cx="17" cy="26" r="2" fill="currentColor"></svg:circle><svg:circle cx="31" cy="26" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20 32a2 2 0 1 0 0 4zm8 4a2 2 0 1 0 0-4zm-8 0h8v-4h-8z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 10v8M4 26v8m40-8v8"></svg:path><svg:circle cx="24" cy="8" r="2" stroke="currentColor" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkOutlineRobotOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
