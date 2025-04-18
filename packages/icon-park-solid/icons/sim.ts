import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSimIcon],svg[icon-park-solid-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSim0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M8 4h24.889L40 11.273V44H8z"></svg:path><svg:path fill="#000" stroke="#000" d="M33 26H15v10h18z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 12v6m6-6v6m6-6v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSim0)"></svg:path>`,
})
export class IconParkSolidSimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
