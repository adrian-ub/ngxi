import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWorldIcon],svg[tabler-world-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18"></svg:path></svg:g>`,
})
export class TablerWorldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
