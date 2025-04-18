import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhOUpperCaseIcon],svg[whh-o-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q106 0 181 75t75 181v512q0 106-75 181t-181 75m128-768q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v512q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768z"></svg:path>`,
})
export class WhhOUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
