import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageVideoPlayerIcon],svg[mage-video-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3.196 7.873h17.608m-4.997 0V2.877M8.193 7.873V2.877m1.947 9.051v4.922c0 .101.032.2.091.286c.06.085.145.154.246.199a.66.66 0 0 0 .633-.057l3.798-2.65a.56.56 0 0 0 .176-.199a.5.5 0 0 0-.02-.492a.6.6 0 0 0-.192-.186l-3.798-2.272a.66.66 0 0 0-.616-.025a.6.6 0 0 0-.232.198a.5.5 0 0 0-.086.276"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageVideoPlayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
