import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerDigitalOutline24pxIcon],svg[healthicons-thermometer-digital-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m9.225 8.794l2.022 3.114l1.678-1.09l-2.023-3.113z"></svg:path><svg:path fill-rule="evenodd" d="M4.662 6.135a1 1 0 0 1 .293-1.383l3.992-2.59a1 1 0 0 1 1.383.293l4.665 7.181c.311.48.516 1.02.601 1.585l.651 4.335a4 4 0 0 0 .594 1.574l.933 1.435l-1.417.92l-.933-1.435a4 4 0 0 0-1.197-1.183L10.53 14.51a4 4 0 0 1-1.204-1.193zm1.883-.201l2.835-1.84l.495.763l-2.834 1.84zm1.313 2.02l2.834-1.84l3.12 4.802l.605 4.033l-3.44-2.193z" clip-rule="evenodd"></svg:path><svg:path d="m16.865 20.357l.758 1.168a.85.85 0 0 0 1.426-.926l-.759-1.168z"></svg:path></svg:g>`,
})
export class HealthiconsThermometerDigitalOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
