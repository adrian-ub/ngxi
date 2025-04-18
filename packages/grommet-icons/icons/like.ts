import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsLikeIcon],svg[grommet-icons-like-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 23h19q3 0 3-3V10h-7V4q0-3-3-3h-2s-.016 6-.016 7.326S10 11 8 11H1zm5 0V11"></svg:path>`,
})
export class GrommetIconsLikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
