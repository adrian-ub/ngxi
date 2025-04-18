import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsCloudPrintIcon],svg[pepicons-cloud-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 4h-1a4.002 4.002 0 0 0-3.874 3H8a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4.002 4.002 0 0 0 13 4Z" opacity=".8"></svg:path><svg:path d="M10 3H9a4.002 4.002 0 0 0-3.874 3H5a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4.002 4.002 0 0 0 10 3ZM5.901 7l.193-.75A3.002 3.002 0 0 1 9 4h1c1.405 0 2.614.975 2.924 2.325l.14.61l.61.141A3.001 3.001 0 0 1 13 13H5a3 3 0 1 1 0-6h.901Z"></svg:path></svg:g>`,
})
export class PepiconsCloudPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
