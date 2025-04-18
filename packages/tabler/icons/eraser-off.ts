import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEraserOffIcon],svg[tabler-eraser-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18m-2-1H8.5l-4.21-4.3a1 1 0 0 1 0-1.41l5-4.993m2.009-2.01l3-3a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-2.97 3m-2.02 2.043l-4.211 4.256M18 13.3L11.7 7"></svg:path>`,
})
export class TablerEraserOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
