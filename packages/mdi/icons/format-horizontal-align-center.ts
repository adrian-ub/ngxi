import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatHorizontalAlignCenterIcon],svg[mdi-format-horizontal-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16v-3h4v-2h-4V8l-4 4zM5 8v3H1v2h4v3l4-4zm6 12h2V4h-2z"></svg:path>`,
})
export class MdiFormatHorizontalAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
