import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextColorAccent16FilledIcon],svg[fluent-text-color-accent-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 11.167c0-.368.246-.667.55-.667h9.9c.304 0 .55.299.55.667v2.666c0 .368-.246.667-.55.667h-9.9c-.304 0-.55-.299-.55-.667z"></svg:path>`,
})
export class FluentTextColorAccent16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
