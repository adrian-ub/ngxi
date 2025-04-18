import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMoveDiagonalOneSolidIcon],svg[mynaui-move-diagonal-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4.25a.75.75 0 0 1 .75.75L8.905 7.845l7.25 7.25L19 12.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75l2.845-2.845l-7.25-7.25L5 11.75a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 5 4.25z"></svg:path>`,
})
export class MynauiMoveDiagonalOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
