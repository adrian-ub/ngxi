import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAngleDownIcon],svg[fontisto-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.43 4.8L0 7.222L12 19.2L24 7.222L21.57 4.8L12 14.347z"></svg:path>`,
})
export class FontistoAngleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
