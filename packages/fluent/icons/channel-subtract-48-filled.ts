import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChannelSubtract48FilledIcon],svg[fluent-channel-subtract-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12.5c-.607.456-1 1.182-1 2A2.496 2.496 0 0 0 7.5 17A2.5 2.5 0 1 0 6 12.5m.189-1.78A4 4 0 1 1 6 18.21v17.54A6.25 6.25 0 0 0 12.25 42h11.794A12.94 12.94 0 0 1 22 35c0-2.368.633-4.588 1.74-6.5h-6.49a1.25 1.25 0 1 1 0-2.5h8.37A12.96 12.96 0 0 1 35 22c2.577 0 4.98.75 7 2.044V12.25A6.25 6.25 0 0 0 35.75 6h-23.5a6.25 6.25 0 0 0-6.061 4.72M16 20.25c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 1 1 0 2.5h-13.5c-.69 0-1.25-.56-1.25-1.25M46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-3 0a1 1 0 0 0-1-1H28a1 1 0 1 0 0 2h14a1 1 0 0 0 1-1"></svg:path>`,
})
export class FluentChannelSubtract48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
