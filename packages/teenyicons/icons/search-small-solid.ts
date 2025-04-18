import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSearchSmallSolidIcon],svg[teenyicons-search-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4a3 3 0 1 0 1.738 5.445l1.408 1.409l.708-.708l-1.409-1.408A3 3 0 0 0 7 4"></svg:path>`,
})
export class TeenyiconsSearchSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
