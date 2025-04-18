import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGlobeOffIcon],svg[tabler-globe-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.353 7.355a4 4 0 0 0 5.29 5.293m2.007-2.009a4 4 0 0 0-5.3-5.284M5.75 15a8.015 8.015 0 0 0 9.792.557m2.02-1.998A8.015 8.015 0 0 0 15 2m-4 15v4m-4 0h8M3 3l18 18"></svg:path>`,
})
export class TablerGlobeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
