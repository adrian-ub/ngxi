import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrowserShareIcon],svg[tabler-browser-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16m-7.5 12H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7M8 4v4m8 14l5-5m0 4.5V17h-4.5"></svg:path>`,
})
export class TablerBrowserShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
