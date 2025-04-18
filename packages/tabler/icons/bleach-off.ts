import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBleachOffIcon],svg[tabler-bleach-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19h14m1.986-1.977a2 2 0 0 0-.146-.773L13.74 4a2 2 0 0 0-3.5 0l-.815 1.405M7.937 7.973L3.14 16.25A2 2 0 0 0 4.89 19M3 3l18 18"></svg:path>`,
})
export class TablerBleachOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
