import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenGcoinIcon],svg[token-gcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.171 7.593v5.487l-5.142 5.05v1.867L12 21l-1.054-1.029v-1.866L5.829 13.08V5.057h5.142V3h2.058v2.057h4.145L14.7 7.63H8.4v4.448l2.571 2.623V9.686h2.058v5.009l2.571-2.623v-2.057z"></svg:path>`,
})
export class TokenGcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
