import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGesture20FilledIcon],svg[fluent-gesture-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M3.5 16.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M5.75 4a.75.75 0 0 0-.309 1.433l9.064 4.1l-9.59 4.796a.75.75 0 1 0 .67 1.342l11-5.5a.75.75 0 0 0-.026-1.354L9.228 5.5h5.522a.75.75 0 0 0 0-1.5H5.751"></svg:path>`,
})
export class FluentGesture20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
