import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsAngleUpPrintIcon],svg[pepicons-angle-up-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.988 7.391L5.04 12.348c-1.537 1.28.384 3.585 1.92 2.304l5.04-4.2l5.04 4.2c1.536 1.28 3.457-1.024 1.92-2.304L13.012 7.39A1.482 1.482 0 0 0 12 6.973a1.482 1.482 0 0 0-1.012.418Z" clip-rule="evenodd" opacity=".8"></svg:path><svg:path d="m16.32 12.116l-6-5l-.64.768l6 5l.64-.768Z"></svg:path><svg:path d="m15.68 12.884l-6-5c-.512-.427.128-1.195.64-.768l6 5c.512.427-.128 1.195-.64.768Z"></svg:path><svg:path d="m4.32 12.884l6-5l-.64-.768l-6 5l.64.768Z"></svg:path><svg:path d="m3.68 12.116l6-5c.512-.427 1.152.341.64.768l-6 5c-.512.427-1.152-.341-.64-.768Z"></svg:path></svg:g>`,
})
export class PepiconsAngleUpPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
