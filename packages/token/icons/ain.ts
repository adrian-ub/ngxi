import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAinIcon],svg[token-ain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.4 3v5.91L7.698 14.4H3v-.6L10.8 3zm.6 0v5.904l3.942 5.496H21v-.6L12.6 3zm9 12h-4.626l4.302 6H21zm-1.062 6l-4.302-6h-7.62l-4.044 6zM3.252 21l4.044-6H3v6zm5.172-6.6l3.282-4.872l3.498 4.872z"></svg:path>`,
})
export class TokenAinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
