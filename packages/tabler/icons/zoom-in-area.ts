import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZoomInAreaIcon],svg[tabler-zoom-in-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13v4m-2-2h4m-7 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0m12 7l-3-3M6 18H5a2 2 0 0 1-2-2v-1m0-4v-1m0-4V5a2 2 0 0 1 2-2h1m4 0h1m4 0h1a2 2 0 0 1 2 2v1"></svg:path>`,
})
export class TablerZoomInAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
