import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAlarmAddFillIcon],svg[ri-alarm-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13a9 9 0 1 0 18 0a9 9 0 0 0-18 0M5.283 2.747L1.747 6.283l1.414 1.414L6.697 4.16zm16.97 3.536l-3.535-3.536l-1.415 1.414l3.536 3.536zM11 9h2v3h3v2h-3v3h-2v-3H8v-2h3z"></svg:path>`,
})
export class RiAlarmAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
