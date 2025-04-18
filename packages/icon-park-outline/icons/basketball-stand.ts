import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBasketballStandIcon],svg[icon-park-outline-basketball-stand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="5" rx="2"></svg:rect><svg:path d="M31 22v-7H17v7m1 17h12m-13-6h14m1-6l-2 12l1 4M16 27l2 12l-1 4m7-16v16m10-16H14"></svg:path></svg:g>`,
})
export class IconParkOutlineBasketballStandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
