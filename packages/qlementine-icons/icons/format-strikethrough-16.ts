import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFormatStrikethrough16Icon],svg[qlementine-icons-format-strikethrough-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.17 2.25c1.93 0 3.49.983 3.88 2.51c.024.097.032.21.032.347c0 .306-.202.508-.5.508c-.29 0-.459-.153-.548-.443c-.33-1.24-1.44-1.93-2.9-1.93c-1.57 0-2.81.822-2.81 2.14c0 1.06.717 1.72 2.44 2.11l1.27.29q.42.094.78.205h3.69c.667 0 .667 1 0 1h-1.82c.48.483.695 1.09.695 1.86c0 2.06-1.66 3.39-4.17 3.39c-2.19 0-3.76-1.04-4.15-2.51a1.5 1.5 0 0 1-.072-.443c0-.355.193-.58.508-.58c.282 0 .459.145.532.451c.298 1.34 1.57 2.08 3.24 2.08c1.75 0 2.99-.927 2.99-2.25c0-.959-.556-1.59-1.89-2h-6.85l-.105-.009c-.56-.099-.525-.99.105-.99h3.33c-1.14-.57-1.64-1.41-1.64-2.56c0-1.88 1.69-3.19 3.97-3.19z"></svg:path>`,
})
export class QlementineIconsFormatStrikethrough16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
