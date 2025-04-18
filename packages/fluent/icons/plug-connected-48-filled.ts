import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlugConnected48FilledIcon],svg[fluent-plug-connected-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.515 9.514l-1.27 1.27a4.25 4.25 0 0 0 0 6.01l10.96 10.96a4.25 4.25 0 0 0 6.01 0l1.27-1.27c4.388-4.387 4.667-11.327.839-16.04l4.31-4.31a1.25 1.25 0 1 0-1.768-1.768l-4.31 4.31c-4.713-3.83-11.654-3.55-16.041.838m6.24 27.701l-1.27 1.27c-4.387 4.388-11.328 4.668-16.04.839l-4.311 4.31a1.25 1.25 0 1 1-1.768-1.768l4.31-4.31c-3.828-4.713-3.549-11.653.839-16.041l1.27-1.27a4.25 4.25 0 0 1 6.01 0l10.96 10.96a4.25 4.25 0 0 1 0 6.01"></svg:path>`,
})
export class FluentPlugConnected48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
