import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeDiamondIcon],svg[mynaui-code-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path><svg:path d="m14.908 9.7l.132.131c1.022 1.023 1.534 1.534 1.534 2.169s-.512 1.147-1.534 2.17l-.132.13M13.072 8l-2.143 8M9.092 9.7l-.132.131C7.938 10.854 7.427 11.365 7.427 12s.51 1.147 1.533 2.17l.132.13"></svg:path></svg:g>`,
})
export class MynauiCodeDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
