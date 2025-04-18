import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPdfReferenceIcon],svg[carbon-pdf-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm18-4h2v-6h5V8h-5V4h6V2h-8zM16 2h-4v14h4a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4m2 10a2 2 0 0 1-2 2h-2V4h2a2 2 0 0 1 2 2zM8 2H2v14h2v-5h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 7H4V4h4z"></svg:path>`,
})
export class CarbonPdfReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
