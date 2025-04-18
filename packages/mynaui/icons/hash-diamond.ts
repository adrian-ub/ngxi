import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHashDiamondIcon],svg[mynaui-hash-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0zM10.905 8l-1.437 8m4.937-8l-1.437 8m3.314-5.75H7.718m8.564 3.5H7.718"></svg:path>`,
})
export class MynauiHashDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
