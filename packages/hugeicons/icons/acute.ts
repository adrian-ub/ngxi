import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAcuteIcon],svg[hugeicons-acute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.596 2.523c.8-.225 2.676-.7 3.176-.45m0 0c.525.325.625 2.075.775 2.8m-.775-2.8l-9.954 16.1s-.526.85-.225 1.325c.225.525 1.525.5 1.525.5H20.5m0 0c0-.6-1.8-1.8-1.976-2m1.976 2c0 .6-1.45 1.45-1.976 2"></svg:path><svg:path d="M7.494 12.498c1.876.325 3.31 1.225 4.161 2.55c.95 1.35 1.066 3.225.491 4.75"></svg:path></svg:g>`,
})
export class HugeiconsAcuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
