import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSolarCellIcon],svg[openmoji-solar-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92D3F5" d="M51 53H5l12-34h46z"></svg:path><svg:path fill="#61B2E4" d="M15.25 53H51l7.92-22.44z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M51 53H5l12-34h46zM40 19L28 53m30.502-21.244L66 53"></svg:path>`,
})
export class OpenmojiSolarCellIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
