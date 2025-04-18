import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailArrowRightIcon],svg[pixelarticons-mail-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H2v16h10v-2H4V6h16v6h2V4zM6 8h2v2H6zm4 4H8v-2h2zm4 0v2h-4v-2zm2-2v2h-2v-2zm0 0V8h2v2zm8 8h-2v-2h-2v-2h-2v2h2v2h-6v2h6v2h-2v2h2v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsMailArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
