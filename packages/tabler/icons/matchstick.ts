import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMatchstickIcon],svg[tabler-matchstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 21l14-9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="m17 3l3.62 7.29a4.01 4.01 0 0 1-.764 4.51a4 4 0 0 1-6.493-4.464z"></svg:path></svg:g>`,
})
export class TablerMatchstickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
