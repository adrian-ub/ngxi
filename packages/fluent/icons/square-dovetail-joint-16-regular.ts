import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareDovetailJoint16RegularIcon],svg[fluent-square-dovetail-joint-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2h-7A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2M3 11.5v-7A1.5 1.5 0 0 1 4.5 3H6v3.5a.5.5 0 0 0 .658.474L9 6.194v3.612l-2.342-.78A.5.5 0 0 0 6 9.5V13H4.5A1.5 1.5 0 0 1 3 11.5m10 0a1.5 1.5 0 0 1-1.5 1.5H7v-2.806l2.342.78A.5.5 0 0 0 10 10.5v-5a.5.5 0 0 0-.658-.474L7 5.806V3h4.5A1.5 1.5 0 0 1 13 4.5z"></svg:path>`,
})
export class FluentSquareDovetailJoint16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
