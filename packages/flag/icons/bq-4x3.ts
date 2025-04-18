import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBq4x3Icon],svg[flag-bq-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#21468b" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" d="M0 0h640v320H0z"></svg:path><svg:path fill="#ae1c28" d="M0 0h640v160H0z"></svg:path>`,
})
export class FlagBq4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
