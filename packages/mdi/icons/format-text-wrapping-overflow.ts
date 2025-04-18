import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextWrappingOverflowIcon],svg[mdi-format-text-wrapping-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21H5V3h2zm7-18h-2v6h2zm0 12h-2v6h2zm5-3l-3-3v2H9v2h7v2z"></svg:path>`,
})
export class MdiFormatTextWrappingOverflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
