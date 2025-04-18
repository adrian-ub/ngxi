import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageArrowRightIcon],svg[pixelarticons-image-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1h-2v2h2v2h-6v2h6v2h-2v2h2V9h2V7h2V5h-2V3h-2zm-8 2H2v18h20v-8h-2v6H4V5h7zm1 8V9h2v2zm-2 2v-2h2v2zm-2 2v-2h2v2zm0 0v2H6v-2zm8-2h-2v-2h2zm0 0h2v2h-2zM6 7h2v2H6z"></svg:path>`,
})
export class PixelarticonsImageArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
