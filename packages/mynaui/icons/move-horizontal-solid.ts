import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMoveHorizontalSolidIcon],svg[mynaui-move-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.47 7.47a.75.75 0 0 1 1.06 0v3.78h10.94V7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0v-3.78H6.53v3.78a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"></svg:path>`,
})
export class MynauiMoveHorizontalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
