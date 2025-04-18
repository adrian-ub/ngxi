import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatWrapInlineIcon],svg[mdi-format-wrap-inline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 7l5 10H3zM3 3h18v2H3zm18 12v2h-7v-2zM3 19h18v2H3z"></svg:path>`,
})
export class MdiFormatWrapInlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
