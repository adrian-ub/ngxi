import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMergeIcon],svg[whh-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.5 1024q-26.5 0-45-18.5T896 960V768q0-53-37.5-90.5T768 640H640q-53 0-90.5-37.5T512 512q0 53-37.5 90.5T384 640H256q-53 0-90.5 37.5T128 768v192q0 27-18.5 45.5t-45 18.5t-45.5-18.5T0 960V768q0-106 75-181t181-75h64q53 0 90.5-37.5T448 384V214l-24 24q-18 18-43.5 18T337 238t-18-43.5t18-43.5L458 30q6-10 8-13q19-18 46-17q27-1 46 17q2 3 8 13l121 121q18 18 18 43.5T687 238t-43.5 18t-43.5-18l-24-24v170q0 53 37.5 90.5T704 512h64q106 0 181 75t75 181v192q0 27-19 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhMergeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
