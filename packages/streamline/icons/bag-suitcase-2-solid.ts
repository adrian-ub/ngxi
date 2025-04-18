import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBagSuitcase2SolidIcon],svg[streamline-bag-suitcase-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 .02a1.75 1.75 0 0 0-1.75 1.75V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 12.5 3h-1.75V1.77A1.75 1.75 0 0 0 9 .02zM9.25 3V1.77A.25.25 0 0 0 9 1.52H5a.25.25 0 0 0-.25.25V3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBagSuitcase2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
