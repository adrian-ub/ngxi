import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXedEditorIcon],svg[arcticons-xed-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.949 6.675L24 17.625L13.051 6.674M24 3.5v41M44.5 24h-41m31.449 17.325L24 30.376L13.051 41.325m28.274-6.376L30.376 24l10.949-10.949M6.675 34.949L17.625 24L6.674 13.051"></svg:path>`,
})
export class ArcticonsXedEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
