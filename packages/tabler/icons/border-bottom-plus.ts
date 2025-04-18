import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBorderBottomPlusIcon],svg[tabler-border-bottom-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h16M4 16v-.01M20 16v-.01M4 12v-.01M20 12v-.01M4 8v-.01M20 8v-.01M4 4v-.01M8 4v-.01M12 4v-.01M16 4v-.01M20 4v-.01M15 12H9m3-3v6"></svg:path>`,
})
export class TablerBorderBottomPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
