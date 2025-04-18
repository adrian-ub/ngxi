import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiDimButtonIcon],svg[twemoji-dim-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFAC33" d="M18 8C12.477 8 8 12.477 8 18s4.477 10 10 10s10-4.477 10-10S23.523 8 18 8m0 16a6 6 0 1 1 0-12a6 6 0 0 1 0 12"></svg:path><svg:circle cx="18" cy="5" r="2" fill="#FFAC33"></svg:circle><svg:circle cx="18" cy="31" r="2" fill="#FFAC33"></svg:circle><svg:path fill="#FFAC33" d="M10.222 7.394a2 2 0 1 0-2.828 2.828a2 2 0 0 0 2.828-2.828m18.384 18.384a2 2 0 1 1-2.828 2.828a2 2 0 0 1 2.828-2.828"></svg:path><svg:circle cx="5" cy="18" r="2" fill="#FFAC33"></svg:circle><svg:circle cx="31" cy="18" r="2" fill="#FFAC33"></svg:circle><svg:path fill="#FFAC33" d="M28.605 10.222a2 2 0 1 0-2.83-2.829a2 2 0 0 0 2.83 2.829M10.222 28.606a2 2 0 1 1-2.828-2.828a2 2 0 0 1 2.828 2.828"></svg:path>`,
})
export class TwemojiDimButtonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
