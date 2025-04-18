import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMoveHorizontalIcon],svg[mynaui-move-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 8l4 4m0 0l-4 4m4-4H2m4-4l-4 4m0 0l4 4"></svg:path>`,
})
export class MynauiMoveHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
