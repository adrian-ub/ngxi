import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFlipToBackIcon],svg[tdesign-flip-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h3.5v2H9v1.5H7zm5.5 0h3v2h-3zm5 0H21v3.5h-2V5h-1.5zM5 7.5V19h11.5v2H3V7.5zm4 1v3H7v-3zm12 0v3h-2v-3zm-12 5V15h1.5v2H7v-3.5zm12 0V17h-3.5v-2H19v-1.5zM12.5 15h3v2h-3z"></svg:path>`,
})
export class TdesignFlipToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
