import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapWestIcon],svg[tabler-map-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="m9 9l1 6l2-3.75L14 15l1-6"></svg:path></svg:g>`,
})
export class TablerMapWestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
