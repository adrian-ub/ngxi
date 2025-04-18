import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTable1Icon],svg[tdesign-table-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v4h16V4zm16 6h-4v10h4zm-6 10V10h-4v10zm-6 0V10H4v10z"></svg:path>`,
})
export class TdesignTable1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
