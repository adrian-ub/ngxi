import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoClockIcon],svg[entypo-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0 0 10 19.601c5.301 0 9.6-4.298 9.6-9.601c0-5.302-4.299-9.6-9.6-9.6m-.001 17.2a7.6 7.6 0 1 1 0-15.2a7.6 7.6 0 1 1 0 15.2M11 9.33V4H9v6.245l-3.546 2.048l1 1.732l4.115-2.377A.96.96 0 0 0 11 10.9v-.168l4.24-4.166a6.6 6.6 0 0 0-.647-.766z"></svg:path>`,
})
export class EntypoClockIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
