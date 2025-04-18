import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXml01Icon],svg[hugeicons-xml-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m-10 14l1.882 3m0 0l1.883 3m-1.883-3l1.883-3m-1.883 3L3.5 22m17 0h-.941c-.887 0-1.331 0-1.607-.293s-.276-.764-.276-1.707v-4m-7.558 6l.39-4.998c.033-.424.05-.636.172-.676s.247.127.497.459l.998 1.325c.135.18.203.27.294.27s.158-.09.294-.27l.998-1.326c.25-.332.375-.498.497-.458s.139.25.172.674l.393 5"></svg:path></svg:g>`,
})
export class HugeiconsXml01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
