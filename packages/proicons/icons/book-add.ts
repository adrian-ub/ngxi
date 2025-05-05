import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBookAddIcon],svg[proicons-book-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m0-8.993a.5.5 0 0 1 .5.5V17h2.493a.5.5 0 1 1 0 1H18v2.493a.5.5 0 1 1-1 0V18h-2.493a.5.5 0 1 1 0-1H17v-2.493a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 16.245v2.38m2.875-2.375h2.969H7a2.5 2.5 0 0 0-2.5 2.5m6.875 2.5H7a2.5 2.5 0 0 1-2.5-2.5m0 0v-13a3 3 0 0 1 3-3h11a1 1 0 0 1 1 1v6.844"></svg:path></svg:g>`,
})
export class ProiconsBookAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
