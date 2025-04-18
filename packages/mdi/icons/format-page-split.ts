import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatPageSplitIcon],svg[mdi-format-page-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11V7h2v4zm2-10v4h-2V1zm-2 16v-4h2v4zm-2 3H6V4h3V2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h3zm6-17v5h3v12h-3v2h3c1.11 0 2-.89 2-2V8zm-2 16h-2v4h2z"></svg:path>`,
})
export class MdiFormatPageSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
