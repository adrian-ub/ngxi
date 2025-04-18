import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciShuffleIcon],svg[ci-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 20l3-3m0 0l-3-3m3 3h-4a5 5 0 0 1-5-5a5 5 0 0 0-5-5H3m15-3l3 3m0 0l-3 3m3-3h-4a4.98 4.98 0 0 0-3 1M3 17h4a4.98 4.98 0 0 0 3-1"></svg:path>`,
})
export class CiShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
