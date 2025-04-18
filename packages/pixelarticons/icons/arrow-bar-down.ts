import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowBarDownIcon],svg[pixelarticons-arrow-bar-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h2v8h2v2h-2v2h-2v-2H9v-2h2zm-2 8H7v-2h2zm6 0v-2h2v2zM4 18h16v2H4z"></svg:path>`,
})
export class PixelarticonsArrowBarDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
