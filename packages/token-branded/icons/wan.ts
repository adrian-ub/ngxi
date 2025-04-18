import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWanIcon],svg[token-branded-wan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#136AAD" d="m4.683 8.17l1.951.976v4.682L12 10.863l5.366 2.965V9.146l1.951-.976v8.976L12 13.096l-7.317 4.05z"></svg:path><svg:path fill="#3FBCED" d="m12 18.751l-3.644-2.268l-1.897 1.146L12 21l5.619-3.38l-1.912-1.142L12 18.756zm0-13.38L6.933 8.054l-2.034-.888L12 3l7.219 4.161l-2.156.893L12 5.376z"></svg:path></svg:g>`,
})
export class TokenBrandedWanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
