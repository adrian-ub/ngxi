import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHandHeldTabletDrawingIcon],svg[streamline-hand-held-tablet-drawing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-10 10h11"></svg:path><svg:path d="M4 4c.585-.827 1.71-1.79 2.5-1c1 1-2.205 3.743-1 4.5C6.816 8.327 8.764 4.176 10 5s-1.5 2.5 0 3.5"></svg:path></svg:g>`,
})
export class StreamlineHandHeldTabletDrawingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
