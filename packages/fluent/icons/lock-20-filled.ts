import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLock20FilledIcon],svg[fluent-lock-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 2a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a3 3 0 0 1 3-3zm0 8.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM10 4a1 1 0 0 0-1 1v1h2V5a1 1 0 0 0-1-1z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentLock20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
