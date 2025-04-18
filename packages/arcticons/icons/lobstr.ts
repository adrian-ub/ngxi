import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLobstrIcon],svg[arcticons-lobstr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.349 4.5s-6.195.474-12.96 8.454C7.626 20.933 3.816 30.707 9.559 37.83s17.392 6.392 23.604 3.962c9.264-3.623 12.289-19.313-.246-29.694c-.939 2.209-2.596 15.075-15.517 18.94c-.276-1.877-4.176-12.82 9.95-26.538Z"></svg:path>`,
})
export class ArcticonsLobstrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
