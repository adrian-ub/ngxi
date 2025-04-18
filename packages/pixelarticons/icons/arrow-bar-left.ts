import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowBarLeftIcon],svg[pixelarticons-arrow-bar-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v16H4V4zm14 7v2h-8v2h-2v-2H8v-2h2V9h2v2zm-8-2V7h2v2zm0 6h2v2h-2z"></svg:path>`,
})
export class PixelarticonsArrowBarLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
