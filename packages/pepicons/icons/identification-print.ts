import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsIdentificationPrintIcon],svg[pepicons-identification-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 7.5A2.5 2.5 0 0 1 5.5 5h12A2.5 2.5 0 0 1 20 7.5v7a2.5 2.5 0 0 1-2.5 2.5h-12A2.5 2.5 0 0 1 3 14.5v-7Z" clip-rule="evenodd" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="M4 4a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 4 14h12a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 16 4H4ZM1.5 5.5A2.5 2.5 0 0 1 4 3h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 16 15H4a2.5 2.5 0 0 1-2.5-2.5v-7Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.182 6.818a.5.5 0 0 1 .5-.5h2.727a.5.5 0 0 1 0 1H9.682a.5.5 0 0 1-.5-.5Zm0 4.092a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1H9.682a.5.5 0 0 1-.5-.5Zm0-2.728a.5.5 0 0 1 .5-.5h5.454a.5.5 0 0 1 0 1H9.682a.5.5 0 0 1-.5-.5Zm0 1.363a.5.5 0 0 1 .5-.5h5.454a.5.5 0 0 1 0 1H9.682a.5.5 0 0 1-.5-.5Z" clip-rule="evenodd"></svg:path><svg:path d="M7.773 8.182a1.364 1.364 0 1 1-2.728 0a1.364 1.364 0 0 1 2.728 0Z"></svg:path><svg:path d="M8.045 10.775c0 .688-.732.623-1.636.623c-.904 0-1.636.066-1.636-.623c0-.688.732-1.557 1.636-1.557c.904 0 1.636.87 1.636 1.557Z"></svg:path></svg:g>`,
})
export class PepiconsIdentificationPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
