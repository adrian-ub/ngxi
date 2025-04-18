import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationAlignLeftIcon],svg[foundation-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M81.232 15.138H18.769a3.407 3.407 0 0 0-3.407 3.407v3.143a3.407 3.407 0 0 0 3.407 3.407h62.463a3.407 3.407 0 0 0 3.407-3.407v-3.143a3.407 3.407 0 0 0-3.407-3.407m-62.463 29.87h45.634a3.407 3.407 0 0 0 3.407-3.407v-3.143a3.407 3.407 0 0 0-3.407-3.407H18.769a3.407 3.407 0 0 0-3.407 3.407v3.143a3.406 3.406 0 0 0 3.407 3.407m55.634 29.897H18.769a3.407 3.407 0 0 0-3.407 3.407v3.143a3.407 3.407 0 0 0 3.407 3.407h55.634a3.407 3.407 0 0 0 3.407-3.407h.015v-3.143h-.015a3.41 3.41 0 0 0-3.407-3.407M18.769 64.94h38.82a3.407 3.407 0 0 0 3.407-3.407V58.39a3.407 3.407 0 0 0-3.407-3.407h-38.82a3.407 3.407 0 0 0-3.407 3.407v3.143a3.407 3.407 0 0 0 3.407 3.407"></svg:path>`,
})
export class FoundationAlignLeftIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
