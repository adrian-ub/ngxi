import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagPe4x3Icon],svg[flag-pe-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D91023" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" d="M213.3 0h213.4v480H213.3z"></svg:path>`,
})
export class FlagPe4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
