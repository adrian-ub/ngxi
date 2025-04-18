import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonsOffIcon],svg[tabler-hexagons-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18v-5l4-2l4 2v5l-4 2zm4-7V8m1.332-2.666L12 4l4 2v5m-4 2l.661-.331m2.684-1.341L16 11l4 2v3m-1.334 2.667L16 20l-4-2M3 3l18 18"></svg:path>`,
})
export class TablerHexagonsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
