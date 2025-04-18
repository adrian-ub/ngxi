import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMvdIcon],svg[token-mvd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 7.5l9 9V21l-9-9z"></svg:path><svg:path fill="currentColor" d="m3 12l4.5-4.5V3L3 7.5z"></svg:path><svg:path fill="currentColor" d="M5.25 9.75L3 12V7.5zM12 12L7.5 7.5V3L12 7.579zm9-4.5l-9 9V21l9-9z"></svg:path><svg:path fill="currentColor" d="m20.999 12l-4.5-4.5V3l4.5 4.5z"></svg:path><svg:path fill="currentColor" d="M18.75 9.75L21 12V7.5zM12 12l4.5-4.5V3L12 7.579z"></svg:path>`,
})
export class TokenMvdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
