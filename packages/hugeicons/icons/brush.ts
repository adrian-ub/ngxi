import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBrushIcon],svg[hugeicons-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.495 13.753c3.088-3.589 10.084-10.598 13.044-10.749c1.83-.175-1.817 6.321-10.46 13.43m1.38-6.39l2.257 2.28M3 20.855c.71-2.507.262-1.275.504-4.162c.13-.428.389-1.754 2.01-2.415c1.842-.752 3.193.384 3.542.918c1.029 1.115 1.148 2.5 0 4.082S4.504 21.253 3 20.855" color="currentColor"></svg:path>`,
})
export class HugeiconsBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
