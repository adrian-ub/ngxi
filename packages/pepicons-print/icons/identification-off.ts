import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintIdentificationOffIcon],svg[pepicons-print-identification-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 8.5A2.5 2.5 0 0 1 5.5 6h12A2.5 2.5 0 0 1 20 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-12A2.5 2.5 0 0 1 3 15.5z" clip-rule="evenodd" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M4 5a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 4 15h12a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 16 5zM1.5 6.5A2.5 2.5 0 0 1 4 4h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 16 16H4a2.5 2.5 0 0 1-2.5-2.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.182 7.818a.5.5 0 0 1 .5-.5h2.727a.5.5 0 0 1 0 1H9.682a.5.5 0 0 1-.5-.5m0 4.092a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1H9.682a.5.5 0 0 1-.5-.5m0-2.728a.5.5 0 0 1 .5-.5h5.454a.5.5 0 0 1 0 1H9.682a.5.5 0 0 1-.5-.5m0 1.364a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1H9.682a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M7.773 9.182a1.364 1.364 0 1 1-2.728 0a1.364 1.364 0 0 1 2.728 0"></svg:path><svg:path d="M8.045 11.776c0 .688-.732.622-1.636.622s-1.636.066-1.636-.623c0-.688.732-1.557 1.636-1.557s1.636.87 1.636 1.557M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintIdentificationOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
