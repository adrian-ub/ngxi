import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashExpandDiagonalIcon],svg[stash-expand-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.846 8.154h-2.785a.75.75 0 0 1 0-1.5h2.755c.123 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.546c.09.177.116.349.127.478c.01.115.01.247.01.37v2.755a.75.75 0 0 1-1.5 0V8.154M7.404 12.31a.75.75 0 0 1 .75.75v2.785h2.785a.75.75 0 1 1 0 1.5H8.184c-.123 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.546a1.3 1.3 0 0 1-.127-.478a5 5 0 0 1-.01-.37V13.06a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashExpandDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
