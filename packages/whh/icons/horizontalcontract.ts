import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHorizontalcontractIcon],svg[whh-horizontalcontract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576H768v104l-2 4l-4 8l-6.5 8l-9 4l-10.5-4l-160-124v384q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5V576L288 700q-9 6-16.5 2T260 689l-4-9V576H64q-27 0-45.5-19T0 511.5t18.5-45T64 448h192V345q1-1 2-3.5t4-8.5t6.5-8t9-4t10.5 4l160 123V64q0-27 19-45.5T512.5 0t45 19T576 64v384l160-123q10-7 17-2.5t11 13.5l4 9v103h192q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhHorizontalcontractIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
