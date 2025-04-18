import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiSwatchInputIcon],svg[oui-swatch-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="12" height="12" x="2" y="2" fill="currentColor" rx="3"></svg:rect><svg:rect width="11" height="11" x="2.5" y="2.5" fill="currentColor" class="ouiSwatchInput__stroke" rx="2"></svg:rect>`,
})
export class OuiSwatchInputIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
