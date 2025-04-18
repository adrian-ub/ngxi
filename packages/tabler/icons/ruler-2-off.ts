import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRuler2OffIcon],svg[tabler-ruler-2-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.03 7.97L17 3l4 4l-5 5m-2 2l-7 7l-4-4l7-7m6-3l-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5M3 3l18 18"></svg:path>`,
})
export class TablerRuler2OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
