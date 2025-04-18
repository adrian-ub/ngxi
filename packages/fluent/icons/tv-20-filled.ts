import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTv20FilledIcon],svg[fluent-tv-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.5 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentTv20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
