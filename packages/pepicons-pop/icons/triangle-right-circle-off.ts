import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTriangleRightCircleOffIcon],svg[pepicons-pop-triangle-right-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.998 13L9 8.963v8.074zm2.5.866a1 1 0 0 0 0-1.732L8.5 6.365a1 1 0 0 0-1.5.866V18.77a1 1 0 0 0 1.5.866z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopTriangleRightCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
