import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHinduismIcon],svg[streamline-hinduism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.796 9.186a3.825 3.825 0 1 0 3.825-3.825M2.327 1.586A2.909 2.909 0 0 1 6.34 5.743m6.315-2.377a2.447 2.447 0 0 1-3.46 0"></svg:path><svg:path d="M11.668 11.546a3.252 3.252 0 0 0-2.253-5.294c-.62-.052-1.468.094-1.878.459m3.388-5.254a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineHinduismIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
