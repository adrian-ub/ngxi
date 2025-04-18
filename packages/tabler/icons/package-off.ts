import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPackageOffIcon],svg[tabler-package-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.812 4.793L12 3l8 4.5V16m-2.282 1.784L12 21l-8-4.5v-9l2.223-1.25m8.32 4.32L20 7.5M12 12v9m0-9L4 7.5m12-2.25l-4.35 2.447M9.086 9.139L8 9.75M3 3l18 18"></svg:path>`,
})
export class TablerPackageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
