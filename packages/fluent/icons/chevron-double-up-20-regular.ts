import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronDoubleUp20RegularIcon],svg[fluent-chevron-double-up-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.146 9.646a.5.5 0 0 0 .708.706L10 5.188l5.146 5.164a.5.5 0 1 0 .708-.706L10.39 4.162a.55.55 0 0 0-.78 0zm0 5.001a.5.5 0 0 0 .708.706L10 10.188l5.146 5.165a.5.5 0 1 0 .708-.706L10.39 9.163a.55.55 0 0 0-.78 0z"></svg:path>`,
})
export class FluentChevronDoubleUp20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
