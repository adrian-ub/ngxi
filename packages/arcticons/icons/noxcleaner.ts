import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNoxcleanerIcon],svg[arcticons-noxcleaner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.532 42.5v-.002a32 32 0 0 1-1.015-7.978V23.803a3.67 3.67 0 0 0-3.672-3.672h-7.242V9.307c0-1.951-1.461-3.7-3.41-3.802a3.604 3.604 0 0 0-3.796 3.598v11.028h-7.242a3.67 3.67 0 0 0-3.672 3.672V34.52a32 32 0 0 1-1.015 7.98zm-1.015-13.516H9.483M24 42.5v-3.097M34.145 42.5v-3.097M13.855 42.5v-3.097"></svg:path>`,
})
export class ArcticonsNoxcleanerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
