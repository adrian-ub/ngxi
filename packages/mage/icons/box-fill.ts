import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBoxFillIcon],svg[mage-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.62 2.725H4.39A2.37 2.37 0 0 0 2 5.065v2.12a2.38 2.38 0 0 0 1.64 2.29v7.86a3.9 3.9 0 0 0 1.18 2.79a4 4 0 0 0 2.83 1.15h8.71a4 4 0 0 0 3.699-2.427a3.9 3.9 0 0 0 .311-1.513v-7.86A2.38 2.38 0 0 0 22 7.235v-2.12a2.36 2.36 0 0 0-2.38-2.39m.88 4.46a.86.86 0 0 1-.88.85H4.39a.87.87 0 0 1-.89-.85v-2.12a.86.86 0 0 1 .89-.84h15.23a.85.85 0 0 1 .88.84z"></svg:path>`,
})
export class MageBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
