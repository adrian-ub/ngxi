import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextWrappingWrapIcon],svg[mdi-format-text-wrapping-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21H5V3h2zM19 3h-2v18h2zm-6 5H9v2h3.97c.17 0 1.03.16 1.03 2s-.86 2-1 2h-2v-2l-3 3l3 3v-2h2c1.04 0 3-.84 3-4s-1.96-4-3-4"></svg:path>`,
})
export class MdiFormatTextWrappingWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
