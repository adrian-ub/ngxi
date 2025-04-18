import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagLv4x3Icon],svg[flag-lv-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#fff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#981e32" d="M0 0h640v192H0zm0 288h640v192H0z"></svg:path></svg:g>`,
})
export class FlagLv4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
