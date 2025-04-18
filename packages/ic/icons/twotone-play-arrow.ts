import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotonePlayArrowIcon],svg[ic-twotone-play-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8.64v6.72L15.27 12z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m8 19l11-7L8 5zm2-10.36L15.27 12L10 15.36z"></svg:path>`,
})
export class IcTwotonePlayArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
