import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsDistributeHorizontalIcon],svg[majesticons-distribute-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 20V4m14 16V4"></svg:path><svg:rect width="10" height="4" x="10" y="17" fill="currentColor" rx="2" transform="rotate(-90 10 17)"></svg:rect></svg:g>`,
})
export class MajesticonsDistributeHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
