import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMoveVerticalSolidIcon],svg[mynaui-move-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.53 5.47a.75.75 0 0 1 0 1.06h-3.78v10.94h3.78a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06h3.78V6.53H7.47a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0z"></svg:path>`,
})
export class MynauiMoveVerticalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
