import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFlipToFrontIcon],svg[tdesign-flip-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h14v14H7zm2 2v10h10V5zM5 7.5v3H3v-3zm0 5v3H3v-3zm0 5V19h1.5v2H3v-3.5zm6.5 1.5v2h-3v-2zm2 0h3v2h-3z"></svg:path>`,
})
export class TdesignFlipToFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
