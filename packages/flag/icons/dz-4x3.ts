import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagDz4x3Icon],svg[flag-dz-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M320 0h320v480H320z"></svg:path><svg:path fill="#006233" d="M0 0h320v480H0z"></svg:path><svg:path fill="#d21034" d="M424 180a120 120 0 1 0 0 120a96 96 0 1 1 0-120m4 60l-108-35.2l67.2 92V183.2l-67.2 92z"></svg:path>`,
})
export class FlagDz4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
