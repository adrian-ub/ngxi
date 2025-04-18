import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAlphIcon],svg[token-branded-alph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#080515" d="M10.294 4.36a.68.68 0 0 0-.683-.353l-3.161.534c-.267.042-.384.266-.272.506l6.995 14.593a.685.685 0 0 0 .688.352l3.156-.533c.267-.043.384-.267.272-.507zM9.867 14.9c0-.229-.192-.389-.432-.352l-2.863.459a.52.52 0 0 0-.437.49v5.146c0 .229.197.389.437.352l2.863-.459a.52.52 0 0 0 .432-.49z"></svg:path><svg:path fill="#E95B4D" d="M17.865 3.363c0-.235-.192-.395-.432-.358l-2.868.459a.52.52 0 0 0-.432.49V9.1c0 .229.192.389.432.352l2.868-.459a.52.52 0 0 0 .432-.49V3.357z"></svg:path></svg:g>`,
})
export class TokenBrandedAlphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
