import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionFront24FilledIcon],svg[fluent-text-position-front-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.75a1 1 0 0 0 0 2h16.5a1 1 0 1 0 0-2zm8.25 5c-.78 0-1.467.397-1.871 1H7.937a4.252 4.252 0 0 1 8.126 0h-2.192a2.25 2.25 0 0 0-1.871-1m-8.25 2a1 1 0 1 0 0 2h16.5a1 1 0 1 0 0-2zm4 3h2v2a1 1 0 1 1-2 0zm8.5 0h-2v2a1 1 0 1 0 2 0zm-13.5 5a1 1 0 0 1 1-1h16.5a1 1 0 1 1 0 2H3.75a1 1 0 0 1-1-1"></svg:path>`,
})
export class FluentTextPositionFront24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
