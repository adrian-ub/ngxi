import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBrightnessIcon],svg[icon-park-twotone-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBrightness0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24.02 35.354c6.076 0 11-4.925 11-11s-4.924-11-11-11s-11 4.924-11 11s4.925 11 11 11Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="m38.96 9.01l-2.46 2.474M11.067 36.745l-2.046 2.059M24 41.353v3m20-20.999h-4m-2.468 12.982L40 38.804"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24.02 17.354a7 7 0 1 0 0 14" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M4 24.354h4M10.044 9.01l2.053 2.053M24 3.354v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBrightness0)"></svg:path>`,
})
export class IconParkTwotoneBrightnessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
