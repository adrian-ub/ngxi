import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMinimize28FilledIcon],svg[fluent-arrow-minimize-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15h8a1 1 0 0 1 .993.883L13 16v8a1 1 0 0 1-1.993.117L11 24v-5.587l-7.293 7.294a1 1 0 0 1-1.497-1.32l.083-.094L9.585 17H4a1 1 0 0 1-.993-.883L3 16a1 1 0 0 1 .883-.993zh8zM25.707 2.293a1 1 0 0 1 .083 1.32l-.083.094L18.413 11H24a1 1 0 0 1 .993.883L25 12a1 1 0 0 1-.883.993L24 13h-8a1 1 0 0 1-.993-.883L15 12V4a1 1 0 0 1 1.993-.117L17 4v5.585l7.293-7.292a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class FluentArrowMinimize28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
