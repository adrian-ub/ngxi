import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowDownIcon],svg[pixelarticons-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2zM7 14v2h2v-2zm0 0v-2H5v2zm10 0v2h-2v-2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
