import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ArrowTallUpLeftIcon],svg[fluent-mdl2-arrow-tall-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1939 2029L128 219v933H0V0h1152v128H219l1810 1811z"></svg:path>`,
})
export class FluentMdl2ArrowTallUpLeftIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
