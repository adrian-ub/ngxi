import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabInPrivate20FilledIcon],svg[fluent-tab-in-private-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3m-1 2.5v1.293L6.793 4.5H5.5a1 1 0 0 0-1 1m0 2.707v2.586L10.793 4.5H8.207zM12.207 4.5L4.5 12.207V14.5q0 .134.034.26L14.759 4.533A1 1 0 0 0 14.5 4.5zm3.26.741L5.24 15.466a1 1 0 0 0 .259.034h2.293L15.5 7.793V5.5a1 1 0 0 0-.034-.259m.033 3.966L9.207 15.5h2.586l3.707-3.707zm0 4L13.207 15.5H14.5a1 1 0 0 0 1-1z"></svg:path>`,
})
export class FluentTabInPrivate20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
