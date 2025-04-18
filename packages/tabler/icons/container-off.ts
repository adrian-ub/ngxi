import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerContainerOffIcon],svg[tabler-container-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4v.01M20 20v.01M20 16v.01M20 12v.01M20 8v.01M8.297 4.289A1 1 0 0 1 9 4h6a1 1 0 0 1 1 1v7m0 4v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8M4 4v.01M4 20v.01M4 16v.01M4 12v.01M4 8v.01M3 3l18 18"></svg:path>`,
})
export class TablerContainerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
