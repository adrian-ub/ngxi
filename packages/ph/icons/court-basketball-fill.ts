import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballFillIcon],svg[ph-court-basketball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 92.23v71.54a4 4 0 0 1-4.41 4a40 40 0 0 1 0-79.52a4 4 0 0 1 4.41 3.98M20.41 167.76a40 40 0 0 0 0-79.52a4 4 0 0 0-4.41 4v71.54a4 4 0 0 0 4.41 3.98M116 48H32a16 16 0 0 0-16 16v4.13a4 4 0 0 0 3.8 4a56 56 0 0 1 0 111.74a4 4 0 0 0-3.8 4V192a16 16 0 0 0 16 16h84a4 4 0 0 0 4-4V52a4 4 0 0 0-4-4m108 0h-84a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h84a16 16 0 0 0 16-16v-4.13a4 4 0 0 0-3.8-4a56 56 0 0 1 0-111.74a4 4 0 0 0 3.8-4V64a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCourtBasketballFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
