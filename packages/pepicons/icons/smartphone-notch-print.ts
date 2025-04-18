import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsSmartphoneNotchPrintIcon],svg[pepicons-smartphone-notch-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 2.5A1.5 1.5 0 0 1 7.5 1h9A1.5 1.5 0 0 1 18 2.5v16a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18.5v-16Z" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="M5.5.5A1.5 1.5 0 0 0 4 2v16a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 16 18V2A1.5 1.5 0 0 0 14.5.5h-9ZM5 2a.5.5 0 0 1 .5-.5H7v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1h1.5a.5.5 0 0 1 .5.5v16a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 5 18V2Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsSmartphoneNotchPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
