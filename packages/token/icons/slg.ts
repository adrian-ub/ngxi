import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSlgIcon],svg[token-slg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.53 17.225l2.647-4.923l5.876 2.583l5.77-2.583l2.647 4.923L12.053 21z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.989 15.234A973 973 0 0 0 6.176 12.3l5.813-2.89l5.834 2.89zm0-.916c-1.308-.662-3.939-1.996-3.986-2.012l3.986-1.98l4.007 1.985l-4.007 2.012zm-1.842-1.525l1.852.794l1.853-.8L12 12l-1.852.789z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 11.47L7.765 9.607L12 3zm0 0l4.235-1.863L12 3z"></svg:path>`,
})
export class TokenSlgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
