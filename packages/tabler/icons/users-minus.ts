import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUsersMinusIcon],svg[tabler-users-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M3 21v-2a4 4 0 0 1 4-4h4c.948 0 1.818.33 2.504.88M16 3.13a4 4 0 0 1 0 7.75M16 19h6"></svg:path>`,
})
export class TablerUsersMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
