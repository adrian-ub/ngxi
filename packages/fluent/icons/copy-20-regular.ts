import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCopy20RegularIcon],svg[fluent-copy-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zM4 6a2 2 0 0 1 1-1.732V14.5A2.5 2.5 0 0 0 7.5 17h6.232A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5z"></svg:path>`,
})
export class FluentCopy20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
