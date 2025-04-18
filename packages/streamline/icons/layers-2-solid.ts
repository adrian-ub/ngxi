import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLayers2SolidIcon],svg[streamline-layers-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 1A1.5 1.5 0 0 0 5 2.5v4A1.5 1.5 0 0 0 6.5 8h6A1.5 1.5 0 0 0 14 6.5v-4A1.5 1.5 0 0 0 12.5 1zM3.25 3a.75.75 0 0 1 .75.75v5c0 .139.112.25.25.25h7a.75.75 0 0 1 0 1.5h-7A1.75 1.75 0 0 1 2.5 8.75v-5A.75.75 0 0 1 3.25 3M.75 5.5a.75.75 0 0 1 .75.75v5c0 .138.112.25.25.25h7a.75.75 0 0 1 0 1.5h-7A1.75 1.75 0 0 1 0 11.25v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLayers2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
