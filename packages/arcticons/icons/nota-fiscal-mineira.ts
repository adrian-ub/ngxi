import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNotaFiscalMineiraIcon],svg[arcticons-nota-fiscal-mineira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.93 15.612l2.33-4.035a12.155 12.155 0 0 1 21.054 0l5.28 9.145a5.065 5.065 0 0 1-4.387 7.597H14.97"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.112 13.65l2.33 4.034a12.155 12.155 0 0 1-10.528 18.232H19.355a5.065 5.065 0 0 1-4.386-7.596l7.619-13.196"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.722 42.5h-4.66A12.156 12.156 0 0 1 8.537 24.268l5.28-9.145a5.065 5.065 0 0 1 8.772 0l7.618 13.196"></svg:path>`,
})
export class ArcticonsNotaFiscalMineiraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
