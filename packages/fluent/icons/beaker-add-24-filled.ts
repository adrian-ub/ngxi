import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBeakerAdd24FilledIcon],svg[fluent-beaker-add-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.5v6.238c0 .375-.094.744-.273 1.074L7.539 14h4.482a6.52 6.52 0 0 1 3.094-2.549a2.3 2.3 0 0 1-.116-.713V4.5h1A.75.75 0 0 0 16 3H8a.75.75 0 0 0 0 1.5zm-2.275 11h4.588a6.5 6.5 0 0 0-.314 2a6.47 6.47 0 0 0 1.022 3.5h-5.34a1.75 1.75 0 0 1-1.539-2.585zM17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m.5 8.503V18h2.503a.5.5 0 1 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1H17v2.503a.5.5 0 1 0 1 0"></svg:path>`,
})
export class FluentBeakerAdd24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
