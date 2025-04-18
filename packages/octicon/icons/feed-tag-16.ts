import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFeedTag16Icon],svg[octicon-feed-tag-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.22 6.5a.72.72 0 1 1-1.44 0a.72.72 0 0 1 1.44 0"></svg:path><svg:path fill="currentColor" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M4 5v3.38c.001.397.159.778.44 1.059l3.211 3.213a1.2 1.2 0 0 0 1.698 0l3.303-3.303a1.2 1.2 0 0 0 0-1.698L9.439 4.44A1.5 1.5 0 0 0 8.379 4H5a1 1 0 0 0-1 1"></svg:path>`,
})
export class OcticonFeedTag16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
