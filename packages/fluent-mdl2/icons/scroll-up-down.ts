import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ScrollUpDownIcon],svg[fluent-mdl2-scroll-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 219L429 813l-90-90l685-686l685 686l-90 90zm0 1610l595-594l90 90l-685 686l-685-686l90-90z"></svg:path>`,
})
export class FluentMdl2ScrollUpDownIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
