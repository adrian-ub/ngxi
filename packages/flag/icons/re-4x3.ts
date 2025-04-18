import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagRe4x3Icon],svg[flag-re-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#000091" d="M0 0h213.3v480H0z"></svg:path><svg:path fill="#e1000f" d="M426.7 0H640v480H426.7z"></svg:path>`,
})
export class FlagRe4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
