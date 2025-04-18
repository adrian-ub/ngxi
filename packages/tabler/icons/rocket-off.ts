import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRocketOffIcon],svg[tabler-rocket-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.29 9.275A9 9 0 0 0 9 10a6 6 0 0 0-5 3a8 8 0 0 1 7 7a6 6 0 0 0 3-5q.362-.128.708-.283m2.428-1.61A9 9 0 0 0 20 7a3 3 0 0 0-3-3a9 9 0 0 0-6.107 2.864"></svg:path><svg:path d="M7 14a6 6 0 0 0-3 6a6 6 0 0 0 6-3m4-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerRocketOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
