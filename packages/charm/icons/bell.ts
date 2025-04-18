import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmBellIcon],svg[charm-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 1.75c-2.468 0-4.25 1.5-4.25 3.5v3l-2 3.5h12.5l-2-3.5v-3c0-2-1.166-3.5-4.25-3.5m-2.25 10.5c0 3 4.5 3 4.5 0"></svg:path>`,
})
export class CharmBellIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
