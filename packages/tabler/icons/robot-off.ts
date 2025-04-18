import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRobotOffIcon],svg[tabler-robot-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4 0H8a2 2 0 0 1-2-2V6m6-4v2m-3 8v9m6-6v6M5 16l4-2m0 4h6M14 8v.01M3 3l18 18"></svg:path>`,
})
export class TablerRobotOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
