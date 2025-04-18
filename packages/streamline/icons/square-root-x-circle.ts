import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSquareRootXCircleIcon],svg[streamline-square-root-x-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.563 8.039l1.153 1.615l.923-5.308h3.923"></svg:path><svg:path d="M7 13.25A6.25 6.25 0 1 0 7 .75a6.25 6.25 0 0 0 0 12.5m.264-6.284l2.361 2.688m-.139-2.688L7.125 9.654"></svg:path></svg:g>`,
})
export class StreamlineSquareRootXCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
