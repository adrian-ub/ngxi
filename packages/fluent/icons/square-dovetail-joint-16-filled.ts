import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareDovetailJoint16FilledIcon],svg[fluent-square-dovetail-joint-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9.5a.498.498 0 0 1 .658-.474L9 9.807V6.194l-2.342.78A.5.5 0 0 1 6 6.5V2H4.5A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14H6zM11.5 2H7v3.806l2.342-.78A.5.5 0 0 1 10 5.5v5a.5.5 0 0 1-.208.405a.5.5 0 0 1-.45.069L7 10.193V14h4.5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2"></svg:path>`,
})
export class FluentSquareDovetailJoint16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
