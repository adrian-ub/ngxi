import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiDiamondExclamationIcon],svg[gravity-ui-diamond-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.01 6.94L9.06 1.99a1.5 1.5 0 0 0-2.12 0L1.99 6.94a1.5 1.5 0 0 0 0 2.12l4.95 4.95a1.5 1.5 0 0 0 2.12 0l4.95-4.95a1.5 1.5 0 0 0 0-2.12M10.121.928a3 3 0 0 0-4.242 0l-4.95 4.95a3 3 0 0 0 0 4.242l4.95 4.95a3 3 0 0 0 4.242 0l4.95-4.95a3 3 0 0 0 0-4.242zM9 10.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8.75 5a.75.75 0 1 0-1.5 0v2.5a.75.75 0 1 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDiamondExclamationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
