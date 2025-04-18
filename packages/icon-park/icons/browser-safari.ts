import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBrowserSafariIcon],svg[icon-park-browser-safari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#000" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M15 33L19.5 19.5L33 15L28.5 28.5L15 33Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkBrowserSafariIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
