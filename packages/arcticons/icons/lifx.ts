import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLifxIcon],svg[arcticons-lifx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.592 31.548C16.31 28.98 19.963 27.4 24 27.4s7.69 1.579 10.408 4.147a15.05 15.05 0 0 0 4.696-10.944C39.104 12.256 32.334 5.5 24 5.5S8.896 12.256 8.896 20.604a15.05 15.05 0 0 0 4.696 10.944m4.21 4.535c1.586-1.587 3.775-2.57 6.198-2.57s4.612.983 6.198 2.57M24 42.5l1.873-1.873c-.48-.48-1.141-.776-1.873-.776s-1.394.297-1.873.776z"></svg:path>`,
})
export class ArcticonsLifxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
