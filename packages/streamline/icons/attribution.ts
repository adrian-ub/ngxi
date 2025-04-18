import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAttributionIcon],svg[streamline-attribution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path><svg:path d="M5.467 4.073a1.524 1.524 0 1 0 3.048 0a1.524 1.524 0 1 0-3.048 0"></svg:path><svg:path d="m8.301 8.85l-.325 2.602H6.024L5.699 8.85h-.65a.325.325 0 0 1-.326-.326v-.65a2.277 2.277 0 1 1 4.554 0v.65c0 .18-.146.326-.326.326z"></svg:path></svg:g>`,
})
export class StreamlineAttributionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
