import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArrowsHorizontalIcon],svg[pixelarticons-arrows-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9V7h2v2zm2 6v-2h-4v-2h4V9h2v2h2v2h-2v2zm0 0v2h-2v-2zm-6-4v2H7v2H5v-2H3v-2h2V9h2v2zm-4 4h2v2H7zm2-8v2H7V7z"></svg:path>`,
})
export class PixelarticonsArrowsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
