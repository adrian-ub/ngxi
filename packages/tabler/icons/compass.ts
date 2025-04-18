import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCompassIcon],svg[tabler-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m8 16l2-6l6-2l-2 6z"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9-9v2m0 14v2m-9-9h2m14 0h2"></svg:path></svg:g>`,
})
export class TablerCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
