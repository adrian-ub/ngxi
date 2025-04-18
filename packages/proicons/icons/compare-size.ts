import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCompareSizeIcon],svg[proicons-compare-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.75 8.75a2.5 2.5 0 0 1 2.5 2.5v6.5a2.5 2.5 0 0 1-2.5 2.5H5.25a2.5 2.5 0 0 1-2.5-2.5v-6.5a2.5 2.5 0 0 1 2.5-2.5zm-2.5 7.5v2.5m0-8v2.5m-8-9.5h2.5m3 0h.5a2 2 0 0 1 2 2v.5m-11-2.5h-.5a2 2 0 0 0-2 2v.5"></svg:path>`,
})
export class ProiconsCompareSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
