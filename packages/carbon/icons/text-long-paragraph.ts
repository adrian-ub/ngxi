import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextLongParagraphIcon],svg[carbon-text-long-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 24h14v2H6zm0-6h20v2H6zm0-6h20v2H6zm0-6h20v2H6z"></svg:path>`,
})
export class CarbonTextLongParagraphIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
