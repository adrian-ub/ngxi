import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpeakerNone28FilledIcon],svg[fluent-speaker-none-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M16.5 4.814c0-1.094-1.307-1.66-2.105-.912l-4.937 4.63a1.75 1.75 0 0 1-1.197.473H5.25A3.25 3.25 0 0 0 2 12.255v3.492a3.25 3.25 0 0 0 3.25 3.25h3.012c.444 0 .872.17 1.196.473l4.937 4.626c.799.749 2.105.183 2.105-.912V4.814z" fill="currentColor"></svg:path><svg:path d="M19.782 10.722a.75.75 0 0 0-1.064 1.056l2.218 2.235l-2.215 2.206a.75.75 0 1 0 1.058 1.062l2.218-2.207l2.225 2.208a.75.75 0 0 0 1.056-1.064l-2.22-2.205l2.224-2.234a.75.75 0 1 0-1.063-1.058l-2.223 2.231l-2.214-2.23z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentSpeakerNone28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
