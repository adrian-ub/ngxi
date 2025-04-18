import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFlipToBackFilledIcon],svg[tdesign-flip-to-back-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 3H7v3.5h2V5h1.5zm5 0h-3v2h3zM21 3h-3.5v2H19v1.5h2zM5 19V7.5H3V21h13.5v-2z"></svg:path><svg:path fill="currentColor" d="M9 11.5v-3H7v3zm12 0v-3h-2v3zM9 15v-1.5H7V17h3.5v-2zm12 2v-3.5h-2V15h-1.5v2zm-5.5-2h-3v2h3zM17 7h-6v6h6z"></svg:path>`,
})
export class TdesignFlipToBackFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
