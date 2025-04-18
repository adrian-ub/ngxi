import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsPlay16Icon],svg[qlementine-icons-play-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2.01c0-.848.98-1.32 1.64-.79l7.48 5.99c.506.405.506 1.17 0 1.58l-7.48 5.99A1.01 1.01 0 0 1 4 13.99v-12z"></svg:path>`,
})
export class QlementineIconsPlay16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
