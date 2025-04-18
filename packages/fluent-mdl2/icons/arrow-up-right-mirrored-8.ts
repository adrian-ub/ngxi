import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ArrowUpRightMirrored8Icon],svg[fluent-mdl2-arrow-up-right-mirrored-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 0H0v1792h256V437l1573 1574l182-182L437 256h1355z"></svg:path>`,
})
export class FluentMdl2ArrowUpRightMirrored8Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
