import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGraphicStitchingFourIcon],svg[icon-park-solid-graphic-stitching-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M39 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10M9 44a5 5 0 1 0 0-10a5 5 0 0 0 0 10m5-40H4v10h10zm30 30H34v10h10z"></svg:path><svg:path d="M34 9H14m20 30H14m-5-5V14m30 20V14"></svg:path></svg:g>`,
})
export class IconParkSolidGraphicStitchingFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
