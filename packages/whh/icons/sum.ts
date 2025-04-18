import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSumIcon],svg[whh-sum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 128H187l252 353q18 31 1 62q-2 3-65 91.5t-125 175L188 896h516q27 0 45.5 19t18.5 45.5t-18.5 45T704 1024H64q-27 0-45.5-18.5T0 960q0-18 20-46l286-401Q17 108 8 95Q0 80 0 64q0-27 19-45.5T64 0h640q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhSumIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
