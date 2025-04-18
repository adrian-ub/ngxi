import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenFlareIcon],svg[token-flare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.378 9.761h-8.88A4.487 4.487 0 0 0 3 14.141c0 .063.05.118.118.118h8.88c2.438.01 4.435-1.94 4.498-4.385a.12.12 0 0 0-.117-.118zM20.877 3H7.5a4.484 4.484 0 0 0-4.494 4.384c0 .064.049.118.113.118H16.5c2.438.01 4.435-1.938 4.499-4.384A.12.12 0 0 0 20.882 3zM5.252 21a2.255 2.255 0 0 0 2.252-2.259a2.255 2.255 0 0 0-2.252-2.258A2.255 2.255 0 0 0 3 18.74A2.255 2.255 0 0 0 5.252 21"></svg:path>`,
})
export class TokenFlareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
