import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagHu4x3Icon],svg[flag-hu-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#fff" d="M640 480H0V0h640z"></svg:path><svg:path fill="#388d00" d="M640 480H0V320h640z"></svg:path><svg:path fill="#d43516" d="M640 160.1H0V.1h640z"></svg:path></svg:g>`,
})
export class FlagHu4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
