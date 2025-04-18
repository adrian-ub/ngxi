import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTriangleRightIcon],svg[pepicons-pop-triangle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.998 10L6 5.963v8.074zm2.5.866a1 1 0 0 0 0-1.732L5.5 3.365a1 1 0 0 0-1.5.866V15.77a1 1 0 0 0 1.5.866z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopTriangleRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
