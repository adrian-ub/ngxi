import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBrightnessIcon],svg[icon-park-outline-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M24.02 35.354c6.076 0 11-4.925 11-11s-4.924-11-11-11s-11 4.924-11 11s4.925 11 11 11Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="m38.96 9.01l-2.46 2.474M11.067 36.745l-2.046 2.059M24 41.353v3m20-20.999h-4m-2.468 12.982L40 38.804"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M24.02 17.354a7 7 0 1 0 0 14" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M4 24.354h4M10.044 9.01l2.053 2.053M24 3.354v4"></svg:path></svg:g>`,
})
export class IconParkOutlineBrightnessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
