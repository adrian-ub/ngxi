import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopStarFilledCircleIcon],svg[pepicons-pop-star-filled-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m13 18.97l-4.295 1.916a1 1 0 0 1-1.402-1.019l.494-4.677l-3.148-3.493a1 1 0 0 1 .535-1.647l4.6-.976L12.134 5a1 1 0 0 1 1.732 0l2.35 4.074l4.6.976a1 1 0 0 1 .535 1.647l-3.148 3.494l.494 4.676a1 1 0 0 1-1.402 1.018z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopStarFilledCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
