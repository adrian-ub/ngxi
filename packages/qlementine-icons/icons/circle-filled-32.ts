import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsCircleFilled32Icon],svg[qlementine-icons-circle-filled-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 16c0 8.84-7.16 16-16 16S0 24.84 0 16S7.16 0 16 0s16 7.16 16 16"></svg:path>`,
})
export class QlementineIconsCircleFilled32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
