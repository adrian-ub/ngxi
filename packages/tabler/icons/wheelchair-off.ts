import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWheelchairOffIcon],svg[tabler-wheelchair-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16a5 5 0 1 0 10 0a5 5 0 1 0-10 0m14.582 1.59a2 2 0 0 0 2.833 2.824M14 14h-1.4M6 6v5m0-3h2m4 0h5m-2 0v3M3 3l18 18"></svg:path>`,
})
export class TablerWheelchairOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
