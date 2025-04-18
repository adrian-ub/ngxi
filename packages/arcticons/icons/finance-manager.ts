import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFinanceManagerIcon],svg[arcticons-finance-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.51 25.906a1.86 1.86 0 0 1-1.86 1.86h0a1.86 1.86 0 0 1-1.86-1.86h0a1.86 1.86 0 0 1 1.86-1.86h0a1.86 1.86 0 0 1 1.86 1.86"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 30.662a5 5 0 0 1-.423.018h-8.233a4.62 4.62 0 0 1-4.63-4.61v-.54a4.62 4.62 0 0 1 4.61-4.63h8.253q.215 0 .423.02"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.08 12.253h37.263c.64 0 1.157.517 1.157 1.158v26.786c0 .64-.516 1.157-1.157 1.157H5.657A1.155 1.155 0 0 1 4.5 40.201V13.308c0-1.228 1.866-1.883 3.33-2.132l26.23-4.465c2.528-.43 4.674 1.31 5.34 3.787l.45 1.676"></svg:path>`,
})
export class ArcticonsFinanceManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
