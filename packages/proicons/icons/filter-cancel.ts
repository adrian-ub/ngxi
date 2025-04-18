import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFilterCancelIcon],svg[proicons-filter-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 7.25h5.75M7.385 12H12m-1.73 4.75h3.46"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 12a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m-2.352-7.852a.5.5 0 0 1 .707 0L17.5 5.793l1.645-1.645a.5.5 0 1 1 .707.707L18.207 6.5l1.645 1.645a.5.5 0 0 1-.707.707L17.5 7.207l-1.645 1.645a.5.5 0 0 1-.707-.707L16.793 6.5l-1.645-1.645a.5.5 0 0 1 0-.707" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class ProiconsFilterCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
