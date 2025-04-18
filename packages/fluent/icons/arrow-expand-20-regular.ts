import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExpand20RegularIcon],svg[fluent-arrow-expand-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V4.707l3.146 3.147a.5.5 0 1 0 .708-.708L4.707 4H7.5a.5.5 0 0 0 0-1zm0 14a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793l3.146-3.147a.5.5 0 0 1 .708.708L4.707 16H7.5a.5.5 0 0 1 0 1zM17 3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.793l-3.147 3.146a.5.5 0 0 0 .708.708L16 4.707V7.5a.5.5 0 0 0 1 0zM16.5 17a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.793l-3.146-3.147a.5.5 0 0 0-.708.708L15.293 16H12.5a.5.5 0 0 0 0 1z"></svg:path>`,
})
export class FluentArrowExpand20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
