import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagPl4x3Icon],svg[flag-pl-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#fff" d="M640 480H0V0h640z"></svg:path><svg:path fill="#dc143c" d="M640 480H0V240h640z"></svg:path></svg:g>`,
})
export class FlagPl4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
