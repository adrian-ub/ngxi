import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMg4x3Icon],svg[flag-mg-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#fc3d32" d="M213.3 0H640v240H213.3z"></svg:path><svg:path fill="#007e3a" d="M213.3 240H640v240H213.3z"></svg:path><svg:path fill="#fff" d="M0 0h213.3v480H0z"></svg:path></svg:g>`,
})
export class FlagMg4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
