import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAedElectrodesLineIcon],svg[ri-aed-electrodes-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1h-5v2H9v-2H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3zm12 11V5H9v2h7a1 1 0 0 1 1 1v7zM5 9v10h10V9z"></svg:path>`,
})
export class RiAedElectrodesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
