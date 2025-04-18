import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TransitionPopIcon],svg[fluent-mdl2-transition-pop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384h2048v1152H0zm128 1024h1792V512H128zm1389-765l318 317l-318 317l-90-90l162-163H475l162 163l-90 90l-317-317l317-317l90 90l-162 163h1114l-162-163zm531-515v128H0V128zM0 1664h2048v128H0z"></svg:path>`,
})
export class FluentMdl2TransitionPopIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
