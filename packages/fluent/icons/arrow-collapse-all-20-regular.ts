import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCollapseAll20RegularIcon],svg[fluent-arrow-collapse-all-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m3.146 2.646a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1-.708.708L6 8.707V15.5a.5.5 0 0 1-1 0V8.707l-1.646 1.647a.5.5 0 0 1-.708-.708zM17.5 8h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1"></svg:path>`,
})
export class FluentArrowCollapseAll20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
