import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRemote20FilledIcon],svg[fluent-remote-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.97 15.03a.75.75 0 1 0 1.06-1.06L12.56 8.5l5.47-5.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 0 0 0 1.06zM3.03 4.97a.75.75 0 0 0-1.06 1.06l5.47 5.47l-5.47 5.47a.75.75 0 1 0 1.06 1.06l6-6a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class FluentRemote20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
