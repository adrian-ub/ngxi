import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArmchairOffIcon],svg[tabler-armchair-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 13a2 2 0 1 1 4 0v4m-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 1 1 4 0v2h8.036"></svg:path><svg:path d="M5 11V6a3 3 0 0 1 .134-.89m1.987-1.98A3 3 0 0 1 8 3h8a3 3 0 0 1 3 3v5M6 19v2m12-2v2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerArmchairOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
