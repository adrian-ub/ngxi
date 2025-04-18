import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCricketIcon],svg[tabler-cricket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m11.105 18.79l-1 .992a4.159 4.159 0 0 1-6.038-5.715l.157-.166L12.506 5.5l1.5 1.5l3.45-3.391a2.08 2.08 0 0 1 3.057 2.815l-.116.126L17.006 10l1.5 1.5l-3.668 3.617M10.5 7.5l6 6"></svg:path><svg:path d="M11 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path></svg:g>`,
})
export class TablerCricketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
