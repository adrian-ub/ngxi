import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMagicEraserIcon],svg[arcticons-magic-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.36 24.488L21.154 5.5a4.963 4.963 0 0 1 6.85-1.6l12.031 7.472a4.96 4.96 0 0 1 1.601 6.849L29.842 37.208zm20.007 12.426l-3.47 5.586a4.963 4.963 0 0 1-6.85 1.6L7.966 37.219a4.96 4.96 0 0 1-1.601-6.85l3.47-5.586"></svg:path>`,
})
export class ArcticonsMagicEraserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
