import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFormatUppercaseIcon],svg[gg-format-uppercase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 9h-3v8H8V9H5V7h8zm5 4h-2v4h-2v-4h-2v-2h6z" clip-rule="evenodd"></svg:path>`,
})
export class GgFormatUppercaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
