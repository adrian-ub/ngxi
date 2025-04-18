import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRuler16FilledIcon],svg[fluent-ruler-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 1 11 3.5v9A1.5 1.5 0 0 1 9.5 14h-3A1.5 1.5 0 0 1 5 12.5v-9A1.5 1.5 0 0 1 6.5 2zm-2 9a.5.5 0 0 0 0-1H6v1zM8 8.5a.5.5 0 0 0 0-1H6v1zM7.5 6a.5.5 0 0 0 0-1H6v1z"></svg:path>`,
})
export class FluentRuler16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
