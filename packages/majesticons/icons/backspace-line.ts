import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBackspaceLineIcon],svg[majesticons-backspace-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.828a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4A1 1 0 0 1 8.828 7H19zm3 1a3 3 0 0 0-3-3H8.828a3 3 0 0 0-2.12.879l-4 4a3 3 0 0 0 0 4.242l4 4a3 3 0 0 0 2.12.879H19a3 3 0 0 0 3-3V8zm-5.293 1.293a1 1 0 0 0-1.414 0L14 10.586l-1.293-1.293a1 1 0 1 0-1.414 1.414L12.586 12l-1.293 1.293a1 1 0 0 0 1.414 1.414L14 13.414l1.293 1.293a1 1 0 0 0 1.414-1.414L15.414 12l1.293-1.293a1 1 0 0 0 0-1.414z"></svg:path></svg:g>`,
})
export class MajesticonsBackspaceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
