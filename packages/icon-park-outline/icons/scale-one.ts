import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineScaleOneIcon],svg[icon-park-outline-scale-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M18 14H5V9l13-5h12l13 5v5H30"></svg:path><svg:path d="M18 4h12v40H18z"></svg:path><svg:path stroke-linecap="round" d="M18 12h4m-4 18h5m-5-12h5m-5 6h4m-4 12h4m-4-26v28"></svg:path></svg:g>`,
})
export class IconParkOutlineScaleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
