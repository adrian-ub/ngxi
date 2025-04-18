import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRefIcon],svg[token-branded-ref-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F38F31" fill-rule="evenodd" d="M16.384 4.42H7.581L3 12l4.58 7.58h8.804L21 12zm-2.12 2.843H8.21v2.369h4.737L8.21 13.406v3.33l7.816-6.289zM11.6 14.676l1.938-1.584l3.2 3.643h-3.42z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedRefIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
