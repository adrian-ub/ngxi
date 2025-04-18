import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagLt1x1Icon],svg[flag-lt-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt" transform="scale(.51314 1.0322)"><svg:rect width="1063" height="708.7" fill="#006a44" rx="0" ry="0" transform="scale(.93865 .69686)"></svg:rect><svg:rect width="1063" height="236.2" y="475.6" fill="#c1272d" rx="0" ry="0" transform="scale(.93865 .69686)"></svg:rect><svg:path fill="#fdb913" d="M0 0h997.8v164.6H0z"></svg:path></svg:g>`,
})
export class FlagLt1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
