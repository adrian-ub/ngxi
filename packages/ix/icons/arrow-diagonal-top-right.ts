import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixArrowDiagonalTopRightIcon],svg[ix-arrow-diagonal-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.666 149.333V320H320l-.001-97.831l-154.51 154.51l-30.169-30.17L289.829 192h-97.83v-42.666z"></svg:path>`,
})
export class IxArrowDiagonalTopRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
