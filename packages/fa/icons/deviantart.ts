import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faDeviantartIcon],svg[fa-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 303L721 885l24 31h279v415H517l-44 30l-142 273l-30 30H0v-303l303-583l-24-30H0V333h507l44-30L693 30l30-30h301z"></svg:path>`,
})
export class FaDeviantartIcon {
  readonly viewBox = input("0 0 1024 1664")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
