import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGn4x3Icon],svg[flag-gn-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="red" d="M0 0h213.3v480H0z"></svg:path><svg:path fill="#ff0" d="M213.3 0h213.4v480H213.3z"></svg:path><svg:path fill="#090" d="M426.7 0H640v480H426.7z"></svg:path></svg:g>`,
})
export class FlagGn4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
