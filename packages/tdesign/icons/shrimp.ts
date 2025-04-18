import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShrimpIcon],svg[tdesign-shrimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.598 5.99L14 9.588V5c1.324 0 2.55.359 3.598.99M12 5v6h-2c-2.023 0-3.784-.591-5.02-1.614C3.765 8.38 3 6.913 3 5zm2 9.415l3.59 3.592A7 7 0 0 1 14 19zM12 17v2H8a2 2 0 0 1 2-2zm2 4c2.19 0 4.215-.798 5.773-2.095A8.94 8.94 0 0 0 23 12a9.03 9.03 0 0 0-3.218-6.898A8.9 8.9 0 0 0 14 3H1v2c0 2.505 1.027 4.538 2.706 5.927C5.366 12.301 7.604 13 10 13h2v2h-2a4 4 0 0 0-4 4v2zm5.153-4.258L15.413 13h5.517a6.9 6.9 0 0 1-1.777 3.742M20.928 11h-5.513l3.737-3.735A7.03 7.03 0 0 1 20.928 11M9.002 5.998H6.998v2.004h2.004z"></svg:path>`,
})
export class TdesignShrimpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
