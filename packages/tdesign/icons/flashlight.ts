import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFlashlightIcon],svg[tdesign-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h16v7.414l-3 3V24H7V10.414l-3-3zm2 2v1.5h12V2zm12 3.5H6v1.086l3 3V22h6V9.586l3-3zM11 10h2.004v2.004H11z"></svg:path>`,
})
export class TdesignFlashlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
