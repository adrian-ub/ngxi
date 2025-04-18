import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsEraserIcon],svg[meteor-icons-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 21H7l-4-4a3 3 0 0 1 0-4l9-9a3 3 0 0 1 4 0l5 5a3 3 0 0 1 0 4l-8 8M7.5 8.5l9 9"></svg:path>`,
})
export class MeteorIconsEraserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
