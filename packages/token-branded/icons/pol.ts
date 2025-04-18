import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPolIcon],svg[token-branded-pol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00D7D3" d="M6.6 7.417V4.621L9.431 3L17.4 7.583v2.783L14.556 12zm0 8.95v-2.74l4.881-2.752l3.075 1.739l2.844-1.601v2.451l-7.969 4.491zm2.831 2.251l-2.83-1.555v2.381L9.43 21L12 19.444v-2.243z"></svg:path>`,
})
export class TokenBrandedPolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
