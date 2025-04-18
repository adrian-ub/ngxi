import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPointOffIcon],svg[tabler-point-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.15 9.194a4 4 0 0 0 5.697 5.617M16 12a4 4 0 0 0-4-4M3 3l18 18"></svg:path>`,
})
export class TablerPointOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
