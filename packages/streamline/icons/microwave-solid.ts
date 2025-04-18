import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMicrowaveSolidIcon],svg[streamline-microwave-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2.546 1.088h6.408c.321 0 .582.26.582.582v4.66c0 .322-.26.582-.582.582H2.546a.58.58 0 0 1-.582-.582V4.67c0-.322.26-.582.582-.582m8.146.748c0-.345.28-.625.625-.625h1.046a.625.625 0 1 1 0 1.25h-1.046a.625.625 0 0 1-.625-.625m.625 1.539a.625.625 0 1 0 0 1.25h1.046a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMicrowaveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
