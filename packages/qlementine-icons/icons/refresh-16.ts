import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsRefresh16Icon],svg[qlementine-icons-refresh-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.12.146a.5.5 0 1 1 .708.708l-2.15 2.15h3.29c1.16 0 2.3.339 3.28.974s1.74 1.54 2.21 2.61a6.01 6.01 0 0 1-1.059 6.47a6.02 6.02 0 0 1-6.35 1.638c-1.1-.371-2.07-1.05-2.79-1.97s-1.16-2.02-1.27-3.17a.5.5 0 0 1 .996-.09a5 5 0 0 0 1.06 2.65a5.002 5.002 0 1 0 6.66-7.289a5 5 0 0 0-2.73-.812h-3.29l2.15 2.15q.07.07.11.162c.04.092.037.126.037.192a.5.5 0 0 1-.309.463a.5.5 0 0 1-.546-.109l-3-3a.5.5 0 0 1-.147-.354a.5.5 0 0 1 .147-.354l3-3z"></svg:path>`,
})
export class QlementineIconsRefresh16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
