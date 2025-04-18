import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTypeDriveIcon],svg[icon-park-solid-type-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTypeDrive0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 12a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path fill="#fff" stroke="#000" d="M15.414 32.586A2 2 0 0 1 16.828 32H30.26a2 2 0 0 1 1.302.481L38 38H10z"></svg:path><svg:path stroke="#fff" d="M39 38H9"></svg:path><svg:circle cx="15" cy="21" r="4" fill="#000" stroke="#000"></svg:circle><svg:circle cx="33" cy="21" r="4" fill="#000" stroke="#000"></svg:circle><svg:path stroke="#000" d="M15 25h18m-18-8h18"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTypeDrive0)"></svg:path>`,
})
export class IconParkSolidTypeDriveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
