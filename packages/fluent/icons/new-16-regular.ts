import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNew16RegularIcon],svg[fluent-new-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.502 11h5a.5.5 0 0 1 .09.992l-.09.008h-5a.5.5 0 0 1-.09-.992zh5zm1.646-5.854a.5.5 0 0 1 .638-.057l.07.058l3.998 4a.5.5 0 0 1-.638.764l-.07-.058l-3.998-4a.5.5 0 0 1 0-.707M11.502 3a.5.5 0 0 1 .491.41l.009.09v5a.5.5 0 0 1-.992.09l-.008-.09v-5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentNew16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
