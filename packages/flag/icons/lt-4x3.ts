import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagLt4x3Icon],svg[flag-lt-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt" transform="scale(.64143 .96773)"><svg:rect width="1063" height="708.7" fill="#006a44" rx="0" ry="0" transform="scale(.93865 .69686)"></svg:rect><svg:rect width="1063" height="236.2" y="475.6" fill="#c1272d" rx="0" ry="0" transform="scale(.93865 .69686)"></svg:rect><svg:path fill="#fdb913" d="M0 0h997.8v164.6H0z"></svg:path></svg:g>`,
})
export class FlagLt4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
