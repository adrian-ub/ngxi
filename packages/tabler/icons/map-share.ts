import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapShareIcon],svg[tabler-map-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19l-4-2l-6 3V7l6-3l6 3l6-3v9M9 4v13m6-10v6.5m1 8.5l5-5m0 4.5V17h-4.5"></svg:path>`,
})
export class TablerMapShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
