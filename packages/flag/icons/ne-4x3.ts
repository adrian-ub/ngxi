import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagNe4x3Icon],svg[flag-ne-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0db02b" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" d="M0 0h640v320H0z"></svg:path><svg:path fill="#e05206" d="M0 0h640v160H0z"></svg:path><svg:circle cx="320" cy="240" r="68" fill="#e05206"></svg:circle>`,
})
export class FlagNe4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
