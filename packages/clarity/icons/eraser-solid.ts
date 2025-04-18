import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityEraserSolidIcon],svg[clarity-eraser-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 32H15.33L19 28.37l-9.9-9.9L3.54 24a1.83 1.83 0 0 0 0 2.6L9 32H3a1 1 0 0 0 0 2h25a1 1 0 0 0 0-2" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="m34.08 10.65l-7.3-7.3a1.83 1.83 0 0 0-2.6 0L10.47 17.06l9.9 9.9l13.71-13.71a1.85 1.85 0 0 0 0-2.6" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityEraserSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
