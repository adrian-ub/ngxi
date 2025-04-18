import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBellIcon],svg[whh-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 960H622q-17 29-46 46.5t-64 17.5t-64-17.5t-46-46.5H64q-27 0-45.5-19T0 896v-64q53 0 90.5-75T128 576V448q0-142 91.5-248.5T448 70v-6q0-27 19-45.5T512 0t45 18.5T576 64v6q137 23 228.5 129.5T896 448v128q0 106 37.5 181t90.5 75v64q0 26-18.5 45T960 960"></svg:path>`,
})
export class WhhBellIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
