import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSoupOffIcon],svg[tabler-soup-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19h16m-4-8h6c0 1.691-.525 3.26-1.42 4.552m-2.034 2.032A7.96 7.96 0 0 1 13 19h-2a8 8 0 0 1-8-8h8m1-6v3m3-3v3M3 3l18 18"></svg:path>`,
})
export class TablerSoupOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
