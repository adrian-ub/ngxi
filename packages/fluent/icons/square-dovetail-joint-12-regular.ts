import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareDovetailJoint12RegularIcon],svg[fluent-square-dovetail-joint-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M3 8V4a1 1 0 0 1 1-1h1v2a.5.5 0 0 0 .621.485L7 5.141V6.86l-1.379-.344A.5.5 0 0 0 5 7.001v2H4a1 1 0 0 1-1-1zm6 0a1 1 0 0 1-1 1H6V7.641l1.379.344A.5.5 0 0 0 8 7.5v-3a.5.5 0 0 0-.621-.485L6 4.359V3h2a1 1 0 0 1 1 1z"></svg:path>`,
})
export class FluentSquareDovetailJoint12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
