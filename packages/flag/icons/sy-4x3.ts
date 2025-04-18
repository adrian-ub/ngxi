import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSy4x3Icon],svg[flag-sy-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 0h640v480H0Z"></svg:path><svg:path fill="#fff" d="M0 0h640v320H0Z"></svg:path><svg:path fill="#007a3d" d="M0 0h640v160H0Z"></svg:path><svg:path fill="#ce1126" d="m101 300l39-120l39 120l-102-74.2h126M461 300l39-120l39 120l-102-74.2h126M281 300l39-120l39 120l-102.1-74.2h126.2"></svg:path>`,
})
export class FlagSy4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
