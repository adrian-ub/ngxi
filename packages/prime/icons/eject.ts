import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeEjectIcon],svg[prime-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12.75H5a.75.75 0 0 1-.53-1.28l7-7a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1-.53 1.28m-12.19-1.5h10.38L12 6.06ZM18 19.75H6A1.76 1.76 0 0 1 4.25 18v-2A1.76 1.76 0 0 1 6 14.25h12A1.76 1.76 0 0 1 19.75 16v2A1.76 1.76 0 0 1 18 19.75m-12-4a.25.25 0 0 0-.25.25v2a.25.25 0 0 0 .25.25h12a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Z"></svg:path>`,
})
export class PrimeEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
