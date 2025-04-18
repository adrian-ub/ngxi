import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsArrowJoinIcon],svg[humbleicons-arrow-join-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 12l-3-3m3 3l-3 3m3-3h-5.929a5 5 0 0 0-3.535 1.464l-1.072 1.072A5 5 0 0 1 6.93 16H3m0-8h4.343a4 4 0 0 1 2.829 1.172l1.656 1.656A4 4 0 0 0 14.657 12H18"></svg:path>`,
})
export class HumbleiconsArrowJoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
