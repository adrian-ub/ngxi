import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMilkIcon],svg[tdesign-milk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.85 1H6.15v3.59L4 9.49V23h16V9.49l-2.15-4.9zm-.918 6.476L18 9.91V21h-1.95V9.878zM14.05 10.7V21H6V10.7zm-7.52-2l1.273-2.9h7.614l-1.065 2.9zm1.62-4.9V3h7.7v.8zM13 13h-1.426l-1.576 1.584L8.415 13H7v6h2v-2.586l1.002 1.002l.998-1.003V19h2z"></svg:path>`,
})
export class TdesignMilkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
