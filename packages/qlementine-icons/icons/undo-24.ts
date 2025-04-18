import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsUndo24Icon],svg[qlementine-icons-undo-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.85.854a.5.5 0 0 0-.707-.707l-6 6a.5.5 0 0 0 0 .707l6 6a.5.5 0 0 0 .707-.707L1.7 6.997h14.8a6.5 6.5 0 1 1 0 13h-11a.5.5 0 0 0 0 1h11c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5H1.7L6.85.847z"></svg:path>`,
})
export class QlementineIconsUndo24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
