import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenQubeIcon],svg[token-qube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.94 7.362v6.004l-2.646-1.53V9.109L12 6.176L6.706 8.998v5.729L12 17.559l3.97-2.118l3.97 2.118V21l-3.97-2.118L12 21l-7.941-4.362V7.362L11.999 3z"></svg:path>`,
})
export class TokenQubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
