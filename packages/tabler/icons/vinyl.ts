import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVinylIcon],svg[tabler-vinyl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 3.937A9 9 0 1 0 21 12"></svg:path><svg:path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m8-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="m20 4l-3.5 10l-2.5 2"></svg:path></svg:g>`,
})
export class TablerVinylIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
