import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPushDoorIcon],svg[icon-park-solid-push-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPushDoor0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M6 6h36v36H6"></svg:path><svg:path fill="#fff" stroke="#fff" d="M6 6v36l18-6V12z"></svg:path><svg:path stroke="#000" d="M18 22v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPushDoor0)"></svg:path>`,
})
export class IconParkSolidPushDoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
