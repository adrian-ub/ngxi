import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBankIcon],svg[icon-park-outline-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 17v27h28V17"></svg:path><svg:path d="m5 22l5-5L24 4l14 13l5 5"></svg:path><svg:path d="m19 19l5 6l5-6M18 31h12m-12-6h12m-6 0v12"></svg:path></svg:g>`,
})
export class IconParkOutlineBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
