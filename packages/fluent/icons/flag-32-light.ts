import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlag32LightIcon],svg[fluent-flag-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.5A1.5 1.5 0 0 1 6.5 3h22a.5.5 0 0 1 .397.804L22.63 12l6.268 8.196A.5.5 0 0 1 28.5 21H6v7.5a.5.5 0 0 1-1 0zM6 20h21.488l-5.885-7.696a.5.5 0 0 1 0-.608L27.488 4H6.5a.5.5 0 0 0-.5.5z"></svg:path>`,
})
export class FluentFlag32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
