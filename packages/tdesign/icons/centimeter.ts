import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCentimeterIcon],svg[tdesign-centimeter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h10a2 2 0 0 1 2 2v14h-2V6h-3v14h-2V6h-3v14h-2zM1 6a2 2 0 0 1 2-2h7v2H3v12h7v2H3a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TdesignCentimeterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
