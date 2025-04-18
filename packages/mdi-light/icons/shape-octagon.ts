import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightShapeOctagonIcon],svg[mdi-light-shape-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16.011V8.98L7.98 4h7.04L20 8.98v7.046L15.025 21H7.99L3 16.011ZM8.393 5L4 9.393v6.204L8.403 20h6.208L19 15.611V9.393L14.607 5H8.393Z"></svg:path>`,
})
export class MdiLightShapeOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
