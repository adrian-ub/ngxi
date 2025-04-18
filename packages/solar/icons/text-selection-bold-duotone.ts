import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextSelectionBoldDuotoneIcon],svg[solar-text-selection-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4M22 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill="currentColor" d="M4.75 5.855a2 2 0 0 1-1.5 0v12.29a2 2 0 0 1 1.5 0zM5.855 4.75h12.29a2 2 0 0 1 0-1.5H5.855a2 2 0 0 1 0 1.5M19.25 5.855a2 2 0 0 0 1.5 0v12.29a2 2 0 0 0-1.5 0zM18.145 19.25H5.855a2 2 0 0 1 0 1.5h12.29a2 2 0 0 1 0-1.5" opacity=".5"></svg:path>`,
})
export class SolarTextSelectionBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
