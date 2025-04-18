import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatPageBreakIcon],svg[mdi-format-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20H6v-2H4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2h-2zM14 2H6a2 2 0 0 0-2 2v8h2V4h8v4h4v4h2V8zm-3 14H8v-2h3zm5 0h-3v-2h3zM3 14h3v2H3zm18 2h-3v-2h3z"></svg:path>`,
})
export class MdiFormatPageBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
