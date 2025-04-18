import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFormatHeadingIcon],svg[gg-format-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19V5h2v6h8V5h2v14h-2v-6H8v6z"></svg:path>`,
})
export class GgFormatHeadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
