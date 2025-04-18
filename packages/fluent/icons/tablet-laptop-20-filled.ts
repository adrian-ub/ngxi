import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabletLaptop20FilledIcon],svg[fluent-tablet-laptop-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3a2 2 0 0 0-2 2v3h6a3 3 0 0 1 3 3v1h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10.5 11H14v-1h3.5a.5.5 0 0 1 0 1m-11 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM2 11a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></svg:path>`,
})
export class FluentTabletLaptop20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
