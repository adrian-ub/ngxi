import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReturnKeyIcon],svg[fluent-mdl2-return-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1152H475l466 467l-90 90l-621-621l621-621l90 90l-466 467h1189V384h128z"></svg:path>`,
})
export class FluentMdl2ReturnKeyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
