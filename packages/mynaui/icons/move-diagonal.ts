import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMoveDiagonalIcon],svg[mynaui-move-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 5h6m0 0v6m0-6L5 19m6 0H5m0 0v-6"></svg:path>`,
})
export class MynauiMoveDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
