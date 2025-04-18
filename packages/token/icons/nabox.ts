import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNaboxIcon],svg[token-nabox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 8l7.5 4.5V21L9 19.5v-6L6.5 12v6L4 16.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 21v-9l-8-4.75L12 3l8 4.5v9L17.5 18V9L15 10.5v9zm-3-13.75l2.5-1.5l3 1.75L12.5 9z" clip-rule="evenodd"></svg:path>`,
})
export class TokenNaboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
