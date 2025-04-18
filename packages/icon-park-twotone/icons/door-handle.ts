import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDoorHandleIcon],svg[icon-park-twotone-door-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDoorHandle0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="26" height="40" x="6" y="4" rx="2"></svg:rect><svg:path d="M14 34h10"></svg:path><svg:path fill="#555" d="M42 20v-6H23a5 5 0 1 0 0 6z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDoorHandle0)"></svg:path>`,
})
export class IconParkTwotoneDoorHandleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
