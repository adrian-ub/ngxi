import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGraphicStitchingIcon],svg[icon-park-graphic-stitching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path d="M24 24L34 14C34 8.47715 29.5228 4 24 4C18.4772 4 14 8.47715 14 14L24 24Z"></svg:path><svg:path d="M14 34L24 24L14 14C8.47715 14 4 18.4772 4 24C4 29.5228 8.47715 34 14 34Z"></svg:path><svg:path d="M34 34C39.5228 34 44 29.5228 44 24C44 18.4772 39.5228 14 34 14L24 24L34 34Z"></svg:path><svg:path d="M24 44C29.5228 44 34 39.5228 34 34L24 24L14 34C14 39.5228 18.4772 44 24 44Z"></svg:path></svg:g>`,
})
export class IconParkGraphicStitchingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
