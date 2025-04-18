import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SkypeMinusIcon],svg[fluent-mdl2-skype-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1591 823q42 0 78 16t64 43t43 63t16 79q0 42-16 78t-43 64t-63 43t-79 16H395q-42 0-78-16t-64-43t-42-63t-16-79q0-42 15-78t43-64t63-43t79-16z"></svg:path>`,
})
export class FluentMdl2SkypeMinusIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
