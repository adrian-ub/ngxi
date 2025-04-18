import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonParagraphIcon],svg[carbon-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 4H13a7 7 0 0 0 0 14v10h2V6h5v22h2V6h5ZM13 16a5 5 0 0 1 0-10Z"></svg:path>`,
})
export class CarbonParagraphIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
