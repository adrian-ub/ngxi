import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagLa4x3Icon],svg[flag-la-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagLa4x30"><svg:path fill-opacity=".7" d="M0 0h640v480H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagLa4x30)"><svg:path fill="#ce1126" d="M-40 0h720v480H-40z"></svg:path><svg:path fill="#002868" d="M-40 119.3h720v241.4H-40z"></svg:path><svg:path fill="#fff" d="M423.4 240a103.4 103.4 0 1 1-206.8 0a103.4 103.4 0 1 1 206.8 0"></svg:path></svg:g>`,
})
export class FlagLa4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
