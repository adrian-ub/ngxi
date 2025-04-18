import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHtmlReferenceIcon],svg[carbon-html-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm24-6V6h-2v10h6v-2zm-4-8h-2l-1.5 4L19 6h-2v10h2V9l1.5 4L22 9v7h2zM9 8h2v8h2V8h2V6H9zM5 6v4H2V6H0v10h2v-4h3v4h2V6z"></svg:path>`,
})
export class CarbonHtmlReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
