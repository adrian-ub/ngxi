import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TestBeakerIcon],svg[fluent-mdl2-test-beaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1859 1758q14 23 21 47t7 51q0 40-15 75t-41 61t-61 41t-75 15H354q-40 0-75-15t-61-41t-41-61t-15-75q0-27 6-51t21-47l569-992q10-14 10-34V128H640V0h768v128h-128v604q0 19 10 35zM896 732q0 53-27 99l-331 577h972l-331-577q-27-46-27-99V128H896zm799 1188q26 0 44-19t19-45q0-10-2-17t-8-16l-164-287H464l-165 287q-9 15-9 33q0 26 18 45t46 19z"></svg:path>`,
})
export class FluentMdl2TestBeakerIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
