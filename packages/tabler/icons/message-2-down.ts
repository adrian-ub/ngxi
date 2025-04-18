import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMessage2DownIcon],svg[tabler-message-2-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h8m-8 4h6m-1.5 7.5l-.5.5l-3-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.5M19 16v6m3-3l-3 3l-3-3"></svg:path>`,
})
export class TablerMessage2DownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
