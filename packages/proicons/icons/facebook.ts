import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFacebookIcon],svg[proicons-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.478 21.125a9.3 9.3 0 0 0 3.037.002m-3.038-.002A9.25 9.25 0 0 1 2.75 12a9.25 9.25 0 1 1 10.765 9.127m-3.038-.002V16.12H8.58a.6.6 0 0 1-.6-.6v-1.838a.6.6 0 0 1 .6-.6h1.897V9.95a3 3 0 0 1 3-3h1.81a1 1 0 0 1 1 1v1.04a1 1 0 0 1-1 1h-.772a1 1 0 0 0-1 1v2.092h2.297a.6.6 0 0 1 .592.698l-.25 1.504a1 1 0 0 1-.986.836h-1.653v5.007"></svg:path>`,
})
export class ProiconsFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
