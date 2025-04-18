import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMoveDiagonalOneIcon],svg[mynaui-move-diagonal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 11V5m0 0h6M5 5l14 14m0-6v6m0 0h-6"></svg:path>`,
})
export class MynauiMoveDiagonalOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
