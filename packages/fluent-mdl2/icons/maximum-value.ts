import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MaximumValueIcon],svg[fluent-mdl2-maximum-value-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 512h128v896H0zm2048 0v896h-128V512zm-531 131l318 317l-318 317l-90-90l162-163H475l162 163l-90 90l-317-317l317-317l90 90l-162 163h1114l-162-163z"></svg:path>`,
})
export class FluentMdl2MaximumValueIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
