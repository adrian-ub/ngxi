import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextColorAccent20FilledIcon],svg[fluent-text-color-accent-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 13.125c0-.345.243-.625.542-.625h11.916c.3 0 .542.28.542.625v3.75c0 .345-.242.625-.542.625H4.042c-.3 0-.542-.28-.542-.625z"></svg:path>`,
})
export class FluentTextColorAccent20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
