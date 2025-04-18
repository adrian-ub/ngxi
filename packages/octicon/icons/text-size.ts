import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconTextSizeIcon],svg[octicon-text-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonTextSizeIcon {
  readonly viewBox = input("0 0 18 16")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
