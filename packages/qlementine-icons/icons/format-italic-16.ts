import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFormatItalic16Icon],svg[qlementine-icons-format-italic-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-2.48a.5.5 0 0 0-.482.368l-2.45 9A.5.5 0 0 0 8.57 13h1.93a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h2.48a.5.5 0 0 0 .482-.368l2.45-9A.5.5 0 0 0 8.43 3H6.5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class QlementineIconsFormatItalic16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
