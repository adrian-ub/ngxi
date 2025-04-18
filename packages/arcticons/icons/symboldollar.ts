import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSymboldollarIcon],svg[arcticons-symboldollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.27 32.43a6 6 0 0 0 5.3 2.37h3.2a5.41 5.41 0 0 0 5.39-5.4h0a5.4 5.4 0 0 0-5.39-5.4h-3.54a5.4 5.4 0 0 1-5.39-5.4h0a5.4 5.4 0 0 1 5.39-5.4h3.2a6 6 0 0 1 5.3 2.37M24 13.2v-2.7m0 27v-2.7"></svg:path>`,
})
export class ArcticonsSymboldollarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
