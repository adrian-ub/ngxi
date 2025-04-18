import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonZipReferenceIcon],svg[carbon-zip-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zM28 2h-6v14h2v-5h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 7h-4V4h4zM12 4h3v10h-3v2h8v-2h-3V4h3V2h-8zM2 4h6L2 14v2h8v-2H4l6-10V2H2z"></svg:path>`,
})
export class CarbonZipReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
