import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextUnderline20RegularIcon],svg[fluent-text-underline-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3.5a.5.5 0 0 0-1 0v6.455C5 12.736 7.234 15 10 15s5-2.264 5-5.045V3.5a.5.5 0 0 0-1 0v6.455C14 12.194 12.204 14 10 14s-4-1.806-4-4.045zm-1 13a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentTextUnderline20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
