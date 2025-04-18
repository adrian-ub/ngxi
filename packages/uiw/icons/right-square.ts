import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwRightSquareIcon],svg[uiw-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.182 0C19.186 0 20 .814 20 1.818v16.364A1.82 1.82 0 0 1 18.182 20H1.818A1.82 1.82 0 0 1 0 18.182V1.818C0 .814.814 0 1.818 0zM8.749 5.627a.682.682 0 1 0-.977.951l3.402 3.491l-3.397 3.42a.682.682 0 0 0 .967.96l3.87-3.894a.68.68 0 0 0 .005-.957Z"></svg:path>`,
})
export class UiwRightSquareIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
