import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsPlay24Icon],svg[qlementine-icons-play-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.42 2.31A1.502 1.502 0 0 0 7.001 3.5v17c0 .572.325 1.09.839 1.35c.513.252 1.13.19 1.58-.16l11-8.5a1.5 1.5 0 0 0 .583-1.19a1.51 1.51 0 0 0-.583-1.19z"></svg:path>`,
})
export class QlementineIconsPlay24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
