import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRobotOneIcon],svg[icon-park-twotone-robot-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRobotOne0"><svg:g fill="none"><svg:rect width="30" height="24" x="9" y="18" fill="#555" stroke="#fff" stroke-width="4" rx="2"></svg:rect><svg:circle cx="17" cy="26" r="2" fill="#fff"></svg:circle><svg:circle cx="31" cy="26" r="2" fill="#fff"></svg:circle><svg:path fill="#fff" d="M20 32a2 2 0 1 0 0 4zm8 4a2 2 0 1 0 0-4zm-8 0h8v-4h-8z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 10v8M4 26v8m40-8v8"></svg:path><svg:circle cx="24" cy="8" r="2" stroke="#fff" stroke-width="4"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRobotOne0)"></svg:path>`,
})
export class IconParkTwotoneRobotOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
