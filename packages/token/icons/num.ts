import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNumIcon],svg[token-num-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.8v8.4l6 6v-8.4zm12 0h-6v6l4.2 4.182L15 19.2h6zm-12 0H3v14.4h6v-6L4.8 9z"></svg:path>`,
})
export class TokenNumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
