import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMapDistanceIcon],svg[icon-park-twotone-map-distance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMapDistance0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M39.3 6H8.7A2.7 2.7 0 0 0 6 8.7v30.6A2.7 2.7 0 0 0 8.7 42h30.6a2.7 2.7 0 0 0 2.7-2.7V8.7A2.7 2.7 0 0 0 39.3 6Z"></svg:path><svg:path stroke-linecap="round" d="m36 27l-7 3m-8 3l-7 3"></svg:path><svg:path fill="#555" d="M16 29q3-4.343 3-6a3 3 0 1 0-6 0q0 1.657 3 6Zm16-7q3-4.343 3-6a3 3 0 1 0-6 0q0 1.657 3 6Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMapDistance0)"></svg:path>`,
})
export class IconParkTwotoneMapDistanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
