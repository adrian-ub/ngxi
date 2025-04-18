import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeIndustrialAlertOutlineIcon],svg[mdi-fridge-industrial-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15H6v-5h2zm9-11v15c0 1.11-.89 2-2 2v1h-2v-1H7v1H5v-1a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2m-2 0H5v15h10zm4 13h2v-2h-2zm0-10v6h2V7z"></svg:path>`,
})
export class MdiFridgeIndustrialAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
