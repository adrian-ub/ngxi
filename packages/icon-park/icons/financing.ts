import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFinancingIcon],svg[icon-park-financing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:rect width="10" height="10" x="24" y="16.929" fill="#43CCF8" stroke="#fff" rx="2" transform="rotate(45 24 16.929)"></svg:rect></svg:g>`,
})
export class IconParkFinancingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
