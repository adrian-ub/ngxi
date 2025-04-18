import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeader4Icon],svg[mdi-format-header-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3zm15 14v-5h-5v-2l5-7h2v7h1v2h-1v5zm0-7V7.42L15.45 11z"></svg:path>`,
})
export class MdiFormatHeader4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
