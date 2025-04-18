import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShuffleIcon],svg[streamline-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5 2l2 2l-2 2m-3-2h5m-2 4l2 2l-2 2"></svg:path><svg:path d="M.5 4H4l4 6h5.5m-13 0H4"></svg:path></svg:g>`,
})
export class StreamlineShuffleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
