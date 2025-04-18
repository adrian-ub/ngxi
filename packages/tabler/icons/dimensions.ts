import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDimensionsIcon],svg[tabler-dimensions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h11m-2 2l2-2l-2-2M5 3L3 5l2 2m14 3v11m-2-2l2 2l2-2m0-7l-2-2l-2 2M3 12a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerDimensionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
