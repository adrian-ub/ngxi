import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBorderRightPlusIcon],svg[tabler-border-right-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20V4m-4 0v.01M12 4v.01M8 4v.01M4 4v.01M4 8v.01M4 12v.01M4 16v.01M16 20v.01M12 20v.01M8 20v.01M4 20v.01M15 12H9m3-3v6"></svg:path>`,
})
export class TablerBorderRightPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
