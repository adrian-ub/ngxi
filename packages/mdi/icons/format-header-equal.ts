import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHeaderEqualIcon],svg[mdi-format-header-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h2v6h4V4h2v14h-2v-6H6v6H4zm10 6V8h7v2zm0 2h7v2h-7z"></svg:path>`,
})
export class MdiFormatHeaderEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
