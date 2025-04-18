import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAtOffIcon],svg[tabler-at-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.174 9.17a4 4 0 0 0 5.646 5.668M16 12a4 4 0 0 0-4-4"></svg:path><svg:path d="M19.695 15.697A2.5 2.5 0 0 0 21 13.5V12A9 9 0 0 0 7.945 3.953M5.623 5.636A9 9 0 0 0 15.5 20.28M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerAtOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
