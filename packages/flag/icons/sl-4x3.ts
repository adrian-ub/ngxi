import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSl4x3Icon],svg[flag-sl-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#0000cd" d="M0 320.3h640V480H0z"></svg:path><svg:path fill="#fff" d="M0 160.7h640v159.6H0z"></svg:path><svg:path fill="#00cd00" d="M0 0h640v160.7H0z"></svg:path></svg:g>`,
})
export class FlagSl4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
