import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTentOffIcon],svg[tabler-tent-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 14l4 6h5m-2.863-6.868L12 4l-1.44 2.559M9.12 9.122L3 20h6l4-6M3 3l18 18"></svg:path>`,
})
export class TablerTentOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
