import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRingOneIcon],svg[icon-park-outline-ring-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 11.273A3.636 3.636 0 1 0 24 4a3.636 3.636 0 0 0 0 7.273ZM24 44a3.636 3.636 0 1 0 0-7.273A3.636 3.636 0 0 0 24 44ZM7.636 27.636a3.636 3.636 0 1 0 0-7.272a3.636 3.636 0 0 0 0 7.272Zm32.728 0a3.636 3.636 0 1 0 0-7.273a3.636 3.636 0 0 0 0 7.273Z"></svg:path><svg:path stroke-linecap="round" d="M32.734 10.16a16.45 16.45 0 0 1 5.107 5.106m-.001 17.468a16.45 16.45 0 0 1-5.106 5.106m-17.467 0a16.45 16.45 0 0 1-5.107-5.106m0-17.468a16.45 16.45 0 0 1 5.107-5.106"></svg:path></svg:g>`,
})
export class IconParkOutlineRingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
