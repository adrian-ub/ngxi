import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMultiplyIcon],svg[tdesign-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.818 7.404L12 10.586l3.182-3.182l1.414 1.414L13.414 12l3.182 3.182l-1.415 1.414L12 13.414l-3.182 3.182l-1.415-1.414L10.585 12L7.403 8.818z"></svg:path>`,
})
export class TdesignMultiplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
