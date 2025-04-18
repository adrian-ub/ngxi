import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBedFlatFilledIcon],svg[tabler-bed-flat-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 5 8m13-1a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm3 8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"></svg:path>`,
})
export class TablerBedFlatFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
