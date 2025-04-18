import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidNailPolishOneIcon],svg[icon-park-solid-nail-polish-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSNailPolishOne0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="24" x="8" y="20" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path fill="#fff" stroke="#fff" d="M17 4h14v16H17z"></svg:path><svg:path fill="#000" stroke="#000" d="M22 32h4l1 5h-6z"></svg:path><svg:path stroke="#000" d="M24 20v12"></svg:path><svg:path stroke="#fff" d="M31 20H17"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSNailPolishOne0)"></svg:path>`,
})
export class IconParkSolidNailPolishOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
