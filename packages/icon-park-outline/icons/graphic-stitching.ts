import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGraphicStitchingIcon],svg[icon-park-outline-graphic-stitching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path d="m24 24l10-10c0-5.523-4.477-10-10-10S14 8.477 14 14z"></svg:path><svg:path d="m14 34l10-10l-10-10C8.477 14 4 18.477 4 24s4.477 10 10 10m20 0c5.523 0 10-4.477 10-10s-4.477-10-10-10L24 24z"></svg:path><svg:path d="M24 44c5.523 0 10-4.477 10-10L24 24L14 34c0 5.523 4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconParkOutlineGraphicStitchingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
