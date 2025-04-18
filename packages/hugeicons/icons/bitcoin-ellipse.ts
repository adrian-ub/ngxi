import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinEllipseIcon],svg[hugeicons-bitcoin-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9.5 16V8M11 8V6m2.5 2V6M11 18v-2m2.5 2v-2m-4-4h5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H8m0-8h6.5A1.5 1.5 0 0 1 16 9.5v1a1.5 1.5 0 0 1-1.5 1.5h-5"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinEllipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
