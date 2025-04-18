import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGraphicStitchingFourIcon],svg[icon-park-graphic-stitching-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M39 14C41.7614 14 44 11.7614 44 9C44 6.23858 41.7614 4 39 4C36.2386 4 34 6.23858 34 9C34 11.7614 36.2386 14 39 14Z"></svg:path><svg:path fill="#2F88FF" d="M9 44C11.7614 44 14 41.7614 14 39C14 36.2386 11.7614 34 9 34C6.23858 34 4 36.2386 4 39C4 41.7614 6.23858 44 9 44Z"></svg:path><svg:path fill="#2F88FF" d="M14 4H4V14H14V4Z"></svg:path><svg:path fill="#2F88FF" d="M44 34H34V44H44V34Z"></svg:path><svg:path d="M34 9H14"></svg:path><svg:path d="M34 39H14"></svg:path><svg:path d="M9 34V14"></svg:path><svg:path d="M39 34V14"></svg:path></svg:g>`,
})
export class IconParkGraphicStitchingFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
