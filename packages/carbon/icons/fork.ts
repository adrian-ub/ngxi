import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonForkIcon],svg[carbon-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6c0 1.858 1.28 3.41 3 3.858V15H9V9.858c1.72-.447 3-2 3-3.858c0-2.206-1.794-4-4-4S4 3.794 4 6c0 1.858 1.28 3.41 3 3.858V15c0 1.103.897 2 2 2h6v5.142c-1.72.447-3 2-3 3.858c0 2.206 1.794 4 4 4s4-1.794 4-4c0-1.858-1.28-3.41-3-3.858V17h6c1.103 0 2-.897 2-2V9.858c1.72-.447 3-2 3-3.858c0-2.206-1.794-4-4-4s-4 1.794-4 4M6 6c0-1.103.897-2 2-2s2 .897 2 2s-.897 2-2 2s-2-.897-2-2m12 20c0 1.103-.897 2-2 2s-2-.897-2-2s.897-2 2-2s2 .897 2 2m8-20c0 1.103-.897 2-2 2s-2-.897-2-2s.897-2 2-2s2 .897 2 2"></svg:path>`,
})
export class CarbonForkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
