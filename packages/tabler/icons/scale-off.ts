import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerScaleOffIcon],svg[tabler-scale-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20h10M9.452 5.425L12 5l6 1m-6-3v5m0 4v8m-3-8L6 6l-3 6a3 3 0 0 0 6 0m9.873 2.871A3 3 0 0 0 21 12l-3-6l-2.677 5.355M3 3l18 18"></svg:path>`,
})
export class TablerScaleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
