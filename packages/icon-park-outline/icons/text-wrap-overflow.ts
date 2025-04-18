import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTextWrapOverflowIcon],svg[icon-park-outline-text-wrap-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M8 10v28M24 4v12m-8 8h26"></svg:path><svg:path stroke-linejoin="round" d="m37.056 19.011l5.037 5.015l-5.037 5.097"></svg:path><svg:path d="M24 32v12"></svg:path></svg:g>`,
})
export class IconParkOutlineTextWrapOverflowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
