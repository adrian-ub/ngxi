import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPopIcon],svg[token-pop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.15 13.8h12.6V8.4H21v7.2H6.15zm-.9 1.8H3V8.4h14.85v1.8H5.25zm12.6-2.7v-1.8H6.15v1.8z"></svg:path>`,
})
export class TokenPopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
