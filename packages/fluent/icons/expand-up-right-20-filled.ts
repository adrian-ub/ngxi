import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentExpandUpRight20FilledIcon],svg[fluent-expand-up-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4a2 2 0 0 0-2 2v4h4a2 2 0 0 1 2 2v4h4a2 2 0 0 0 2-2v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1zm5-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.707l-4.146 4.147a.5.5 0 0 1-.708-.708L15.293 4H11.5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentExpandUpRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
