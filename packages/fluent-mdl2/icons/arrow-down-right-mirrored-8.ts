import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ArrowDownRightMirrored8Icon],svg[fluent-mdl2-arrow-down-right-mirrored-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 256H0v1792h1792v-256H437L2011 219L1829 37L256 1611z"></svg:path>`,
})
export class FluentMdl2ArrowDownRightMirrored8Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
