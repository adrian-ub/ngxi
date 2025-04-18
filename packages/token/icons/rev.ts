import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRevIcon],svg[token-rev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.289 3l8.166 4.636v3.818l-3.71 1.997L18 16.636V21l-7.636-5.727v-3.818l3.72-2.002l-4.795-2.706v11.526L6 21V4.636L9.284 3z"></svg:path>`,
})
export class TokenRevIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
