import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsHorizonalScrollPointMoveScrollHorizonalIcon],svg[streamline-interface-arrows-horizonal-scroll-point-move-scroll-horizonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.48 3.87L.61 6.74a.36.36 0 0 0 0 .52l2.87 2.87m7.04-6.26l2.87 2.87a.36.36 0 0 1 0 .52l-2.87 2.87"></svg:path><svg:circle cx="7" cy="7" r="1.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsHorizonalScrollPointMoveScrollHorizonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
