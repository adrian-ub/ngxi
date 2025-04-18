import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHomeShareIcon],svg[tabler-home-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.247 0 .484.045.702.127"></svg:path><svg:path d="M19 12h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h5m4 1l5-5m0 4.5V17h-4.5"></svg:path></svg:g>`,
})
export class TablerHomeShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
