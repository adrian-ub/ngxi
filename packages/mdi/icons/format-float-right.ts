import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatFloatRightIcon],svg[mdi-format-float-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7h6v6h-6zM3 3h18v2H3zm10 4v2H3V7zm-4 4v2H3v-2zm-6 4h14v2H3zm0 4h18v2H3z"></svg:path>`,
})
export class MdiFormatFloatRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
