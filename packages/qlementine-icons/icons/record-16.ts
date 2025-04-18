import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsRecord16Icon],svg[qlementine-icons-record-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8c0 3.31-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6"></svg:path>`,
})
export class QlementineIconsRecord16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
