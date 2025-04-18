import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHdr01Icon],svg[hugeicons-hdr-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 22v-3m0 0v-3m0 3h3.296m0-3v3m0 0v3m9.749 0v-2.4m0 0v-2.4c0-.879.076-1.2.989-1.2h1.483c.819 0 1.483.806 1.483 1.8s-.664 1.8-1.483 1.8m-2.472 0h2.472m0 0l1.025 2.4M13.7 19c0 1.657-1.265 3-2.825 3c-.351 0-.527 0-.659-.08c-.313-.193-.282-.582-.282-.92v-4c0-.338-.031-.727.282-.92c.132-.08.308-.08.66-.08c1.56 0 2.824 1.343 2.824 3M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2"></svg:path></svg:g>`,
})
export class HugeiconsHdr01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
