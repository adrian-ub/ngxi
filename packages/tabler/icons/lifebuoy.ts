import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLifebuoyIcon],svg[tabler-lifebuoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m12 3l3.35 3.35M9 15l-3.35 3.35m0-12.7L9 9m9.35-3.35L15 9"></svg:path></svg:g>`,
})
export class TablerLifebuoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
