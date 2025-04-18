import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconThumbsdownFilledIcon],svg[codicon-thumbsdown-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7.5v-5c0-.827-.673-1.5-1.5-1.5H12v8h1.5c.827 0 1.5-.673 1.5-1.5M1.429 9.185c.38.518.969.815 1.612.815h3.433l-.464 2.32a2.24 2.24 0 0 0 .464 1.86c.427.521 1.059.82 1.732.82c.444 0 .839-.298.95-.693l.465-1.286a16 16 0 0 1 1.378-2.876V1H4.602a1.99 1.99 0 0 0-1.91 1.404l-1.561 5a1.98 1.98 0 0 0 .297 1.781"></svg:path>`,
})
export class CodiconThumbsdownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
