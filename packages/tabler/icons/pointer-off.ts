import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPointerOffIcon],svg[tabler-pointer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.662 11.628l2.229-1.496a1.2 1.2 0 0 0-.309-2.228L9.569 5.601M4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l.524-.524M3 3l18 18"></svg:path>`,
})
export class TablerPointerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
