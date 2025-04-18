import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFrameIcon],svg[mynaui-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 6.6H3m18 10.8H3M6.6 3v18M17.4 3v18"></svg:path>`,
})
export class MynauiFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
