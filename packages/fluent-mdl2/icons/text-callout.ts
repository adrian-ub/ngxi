import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TextCalloutIcon],svg[fluent-mdl2-text-callout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v1408H0V256zm-128 128H128v1152h1792zm-256 640h-640V896h640zm-896 0H384V896h384z"></svg:path>`,
})
export class FluentMdl2TextCalloutIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
