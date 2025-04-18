import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTag20FilledIcon],svg[fluent-tag-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.007 4.033a2 2 0 0 0-1.987-1.997l-4.89-.032a2 2 0 0 0-1.426.584L3.022 9.252a2 2 0 0 0-.002 2.83l4.949 4.95a2 2 0 0 0 2.828 0l6.631-6.632a2 2 0 0 0 .586-1.417zM14 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class FluentTag20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
