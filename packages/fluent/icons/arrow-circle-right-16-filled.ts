import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleRight16FilledIcon],svg[fluent-arrow-circle-right-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3.462-6.809a.5.5 0 0 1-.106.16l-.003.003l-2.5 2.5a.5.5 0 0 1-.707-.708L9.793 8.5H5a.5.5 0 0 1 0-1h4.793L8.146 5.854a.5.5 0 1 1 .708-.708l2.5 2.5l.002.003a.5.5 0 0 1 .106.542"></svg:path>`,
})
export class FluentArrowCircleRight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
