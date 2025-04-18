import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRotationRightFilledIcon],svg[lsicon-rotation-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.743 3.469l-.707-.75l.728-.686l1.5 1.593a.5.5 0 0 1 0 .685l-1.5 1.593l-.728-.685l.707-.75H6.5a3.5 3.5 0 0 0-3.5 3.5v.06H2v-.06a4.5 4.5 0 0 1 4.5-4.5zM5 7.527a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRotationRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
