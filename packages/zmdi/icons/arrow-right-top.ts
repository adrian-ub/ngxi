import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowRightTopIcon],svg[zmdi-arrow-right-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 43h213v213h-43V115L30 363L0 333L247 85H107z"></svg:path>`,
})
export class ZmdiArrowRightTopIcon {
  readonly viewBox = input("0 0 320 384")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
