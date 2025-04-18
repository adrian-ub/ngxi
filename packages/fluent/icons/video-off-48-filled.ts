import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoOff48FilledIcon],svg[fluent-video-off-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30.929 32.697l10.937 10.937a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l4.119 4.119A6.25 6.25 0 0 0 4 16.25v15.5A6.25 6.25 0 0 0 10.25 38h14.5a6.25 6.25 0 0 0 6.179-5.303m13.075.046c0 1.973-1.667 3.335-3.411 3.252L33 28.403V16.66l5.907-4.079c2.156-1.488 5.097.055 5.097 2.675zM31 16.25v10.153L14.597 10H24.75A6.25 6.25 0 0 1 31 16.25"></svg:path>`,
})
export class FluentVideoOff48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
