import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDust28FilledIcon],svg[fluent-dust-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.242 7.736A6.5 6.5 0 1 1 21.19 14a6.5 6.5 0 1 1-10.948 6.264a6.5 6.5 0 1 1 0-12.527M8 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m18 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 24a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentDust28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
