import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiStrikethroughAIcon],svg[ooui-strikethrough-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8h2.6L10 4l1.4 4h2.7l-2.4-6H8.3zm-5 2v2h3.4L2 18h3l1.7-4.6h6.6L15 18h3l-2.4-6H19v-2z"></svg:path>`,
})
export class OouiStrikethroughAIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
