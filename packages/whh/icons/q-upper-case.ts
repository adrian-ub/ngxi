import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhQUpperCaseIcon],svg[whh-q-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M750 919q18 18 18 43.5t-18 43.5t-43.5 18t-43.5-18l-19-19q-61 37-132 37H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q106 0 181 75t75 181v512q0 71-37 132zM640 768V256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v512q0 53 37.5 90.5T256 896h256q16 0 35-6L401 744q-18-18-18-43.5t18-43.5t43.5-18t43.5 18l146 146q6-19 6-35"></svg:path>`,
})
export class WhhQUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
