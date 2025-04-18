import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareDovetailJoint24FilledIcon],svg[fluent-square-dovetail-joint-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14.25c0-.241.116-.468.312-.608a.76.76 0 0 1 .676-.104l3.513 1.171V9.291l-3.513 1.171A.755.755 0 0 1 9 9.75V3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21H9zM17.75 3H10.5v5.709l3.513-1.171a.75.75 0 0 1 .988.712v7.5a.75.75 0 0 1-.312.608a.76.76 0 0 1-.676.104L10.5 15.291V21h7.25A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3"></svg:path>`,
})
export class FluentSquareDovetailJoint24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
