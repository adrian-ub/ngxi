import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhZUpperCaseIcon],svg[whh-z-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 128L188 896h516q27 0 45.5 19t18.5 45.5t-18.5 45T704 1024H64q-27 0-45.5-18.5T0 960q0-24 32-64l548-768H64q-27 0-45.5-19T0 63.5t18.5-45T64 0h640q27 0 45.5 18.5T768 64q0 26-32 64"></svg:path>`,
})
export class WhhZUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
