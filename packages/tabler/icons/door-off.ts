import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDoorOffIcon],svg[tabler-door-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M6 21V6m1.18-2.825C7.43 3.063 7.708 3 8 3h8a2 2 0 0 1 2 2v9m0 4v3M3 3l18 18"></svg:path>`,
})
export class TablerDoorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
