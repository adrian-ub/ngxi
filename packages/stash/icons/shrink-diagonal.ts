import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashShrinkDiagonalIcon],svg[stash-shrink-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.768 5.947a.75.75 0 0 1 .75.75v2.785h2.785a.75.75 0 0 1 0 1.5h-2.755c-.123 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.546a1.3 1.3 0 0 1-.127-.478c-.01-.115-.01-.247-.01-.37V6.697a.75.75 0 0 1 .75-.75m-4.286 8.57H6.697a.75.75 0 0 1 0-1.5h2.755c.123 0 .255 0 .37.01c.13.01.3.037.478.127c.235.12.426.311.546.546c.09.177.116.349.127.478c.01.115.01.247.01.37v2.755a.75.75 0 0 1-1.5 0v-2.785"></svg:path>`,
})
export class StashShrinkDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
