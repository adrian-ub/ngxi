import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBackpackIcon],svg[icon-park-solid-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSBackpack0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M19 9.556V4h-6v10m16-4.444V4h6v10"></svg:path><svg:path fill="#fff" stroke="#fff" d="M11 20c0-5.523 4.477-10 10-10h6c5.523 0 10 4.477 10 10v20a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4z"></svg:path><svg:path stroke="#fff" d="M11 29H5v10h6m26-10h6v10h-6"></svg:path><svg:path stroke="#000" d="M28 23v4m-11-4h14"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBackpack0)"></svg:path>`,
})
export class IconParkSolidBackpackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
