import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBadgesOffIcon],svg[tabler-badges-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.505 14.497L12 16l-5-3v4l5 3l5-3m-3.127-7.124L17 8V4l-5 3l-2.492-1.495M7 7v1l2.492 1.495M3 3l18 18"></svg:path>`,
})
export class TablerBadgesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
