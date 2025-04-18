import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatFloatLeftIcon],svg[mdi-format-float-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h6v6H3zm0-4h18v2H3zm18 4v2H11V7zm0 4v2H11v-2zM3 15h14v2H3zm0 4h18v2H3z"></svg:path>`,
})
export class MdiFormatFloatLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
