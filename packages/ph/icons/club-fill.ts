import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phClubFillIcon],svg[ph-club-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 144a56 56 0 0 1-84.81 48h-4.44l8.91 29.7A8 8 0 0 1 152 232h-48a8 8 0 0 1-7.66-10.3l8.91-29.7h-4.44A56 56 0 1 1 72 88h2.33a56 56 0 1 1 107.34 0H184a56.06 56.06 0 0 1 56 56"></svg:path>`,
})
export class PhClubFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
