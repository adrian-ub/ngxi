import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMicOn20FilledIcon],svg[fluent-mic-on-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M5.5 10a.5.5 0 0 0-1 0a5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0v-2.022a5.5 5.5 0 0 0 5-5.478a.5.5 0 0 0-1 0a4.5 4.5 0 1 1-9 0z" fill="currentColor"></svg:path><svg:path d="M13 10a3 3 0 0 1-6 0V5a3 3 0 0 1 6 0v5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentMicOn20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
