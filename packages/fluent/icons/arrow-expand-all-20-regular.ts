import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExpandAll20RegularIcon],svg[fluent-arrow-expand-all-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m3.146 11.354a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L6 14.293V7.5a.5.5 0 0 0-1 0v6.793l-1.646-1.647a.5.5 0 0 0-.708.708zM17.5 8h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1"></svg:path>`,
})
export class FluentArrowExpandAll20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
