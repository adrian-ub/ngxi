import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwMinusSquareIcon],svg[uiw-minus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.182 0C19.186 0 20 .814 20 1.818v16.364A1.82 1.82 0 0 1 18.182 20H1.818A1.82 1.82 0 0 1 0 18.182V1.818C0 .814.814 0 1.818 0zm-3.496 9.3H5.91a.682.682 0 0 0 0 1.363h8.777a.682.682 0 1 0 0-1.364"></svg:path>`,
})
export class UiwMinusSquareIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
