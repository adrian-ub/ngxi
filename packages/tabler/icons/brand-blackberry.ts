import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandBlackberryIcon],svg[tabler-brand-blackberry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6a1 1 0 0 0-1-1H4l-.5 2H6a1 1 0 0 0 1-1m-1 6a1 1 0 0 0-1-1H3l-.5 2H5a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1h-2l-.5 2H12a1 1 0 0 0 1-1m1-6a1 1 0 0 0-1-1h-2l-.5 2H13a1 1 0 0 0 1-1m-2 12a1 1 0 0 0-1-1H9l-.5 2H11a1 1 0 0 0 1-1m8-3a1 1 0 0 0-1-1h-2l-.5 2H19a1 1 0 0 0 1-1m1-6a1 1 0 0 0-1-1h-2l-.5 2H20a1 1 0 0 0 1-1"></svg:path>`,
})
export class TablerBrandBlackberryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
