import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerElevatorOffIcon],svg[tabler-elevator-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4h10a1 1 0 0 1 1 1v10m0 4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5m7 3l2 2"></svg:path><svg:path d="m10 14l2 2l2-2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerElevatorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
