import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerContrast2FilledIcon],svg[tabler-contrast-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm0 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 .769.973c3.499-.347 7.082-4.127 7.226-7.747L12 12c0-3.687 3.66-7.619 7.232-7.974A1 1 0 0 0 19 4"></svg:path>`,
})
export class TablerContrast2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
