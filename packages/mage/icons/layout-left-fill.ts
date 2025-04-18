import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLayoutLeftFillIcon],svg[mage-layout-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.92 2.06v19.88A6.75 6.75 0 0 1 2 15.25v-6.5a6.75 6.75 0 0 1 5.92-6.69M22 8.75v6.5A6.76 6.76 0 0 1 15.25 22H9.92V2h5.33A6.76 6.76 0 0 1 22 8.75"></svg:path>`,
})
export class MageLayoutLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
