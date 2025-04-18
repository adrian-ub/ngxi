import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineShutterPriorityIcon],svg[icon-park-outline-shutter-priority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="m15 12l3-6h12l3 6zm26 0H7c-1.657 0-3 1.254-3 2.8v24.4C4 40.746 5.343 42 7 42h34c1.657 0 3-1.254 3-2.8V14.8c0-1.546-1.343-2.8-3-2.8Z"></svg:path><svg:path stroke-linecap="round" d="M28 20c-3 .13-9 1.089-9 3.889c0 3.5 10 2.722 10 6.222c0 2.8-6.667 3.76-10 3.889"></svg:path></svg:g>`,
})
export class IconParkOutlineShutterPriorityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
