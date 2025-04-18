import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLegoOffIcon],svg[tabler-lego-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.5 11h.01m-.01 4a3.5 3.5 0 0 0 5 0"></svg:path><svg:path d="M8 4V3h8v2h1a3 3 0 0 1 3 3v8m-.884 3.127A3 3 0 0 1 17 20v1H7v-1a3 3 0 0 1-3-3V8c0-1.083.574-2.032 1.435-2.56M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerLegoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
