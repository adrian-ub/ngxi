import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfBedIcon],svg[wpf-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 6h-1s-1 .014-1 1H3c0-.989-1-1-1-1H1c-.551 0-1 .449-1 1v18c0 .551.449 1 1 1h1s1-.014 1-1v-1c0-.551.449-1 1-1h18c.551 0 1 .449 1 1v1c0 .989 1 1 1 1h1c.551 0 1-.449 1-1V7c0-.551-.449-1-1-1M3 12c0-1.656.344-3 2-3h5c1.656 0 2 1.344 2 3zm11 0c0-1.656.344-3 2-3h5c1.656 0 2 1.344 2 3z"></svg:path>`,
})
export class WpfBedIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
