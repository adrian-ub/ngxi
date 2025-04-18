import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoControllerRecordIcon],svg[entypo-controller-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3a7 7 0 1 0 .001 13.999A7 7 0 0 0 10 3"></svg:path>`,
})
export class EntypoControllerRecordIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
