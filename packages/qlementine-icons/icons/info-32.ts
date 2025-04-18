import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsInfo32Icon],svg[qlementine-icons-info-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 16 14"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M32 16c0 8.84-7.16 16-16 16S0 24.84 0 16S7.16 0 16 0s16 7.16 16 16m-1 0c0 8.28-6.72 15-15 15S1 24.28 1 16S7.72 1 16 1s15 6.72 15 15" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsInfo32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
