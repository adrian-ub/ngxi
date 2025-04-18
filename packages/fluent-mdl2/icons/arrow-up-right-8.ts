import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ArrowUpRight8Icon],svg[fluent-mdl2-arrow-up-right-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0h1792v1792h-256V437L219 2011L37 1829L1611 256H256z"></svg:path>`,
})
export class FluentMdl2ArrowUpRight8Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
