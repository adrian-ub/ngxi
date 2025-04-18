import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixArrowDiagonalTopLeftIcon],svg[ix-arrow-diagonal-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.334 149.333V320H192l.001-97.831l154.51 154.51l30.169-30.17L222.171 192h97.83v-42.666z"></svg:path>`,
})
export class IxArrowDiagonalTopLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
