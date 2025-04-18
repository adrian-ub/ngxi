import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSwitchVerticalIcon],svg[tabler-switch-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 8l4-4l4 4M7 4v9m6 3l4 4l4-4m-4-6v10"></svg:path>`,
})
export class TablerSwitchVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
