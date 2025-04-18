import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSunOffIcon],svg[tabler-sun-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18m-5-9a4 4 0 0 0-4-4M9.166 9.177a4 4 0 0 0 5.66 5.654M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"></svg:path>`,
})
export class TablerSunOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
