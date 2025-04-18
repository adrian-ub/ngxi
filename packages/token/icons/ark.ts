import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenArkIcon],svg[token-ark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.959 9.804L3 19.367l9-14.824l9 14.914zm1.293 3.739h-2.798L11.894 12l1.366 1.543zm-5.4 2.571l1.595-1.543h4.844l1.636 1.543z"></svg:path>`,
})
export class TokenArkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
