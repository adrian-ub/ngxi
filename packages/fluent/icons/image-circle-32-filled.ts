import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageCircle32FilledIcon],svg[fluent-image-circle-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.228 26.529A13.95 13.95 0 0 1 16 30c-3.535 0-6.764-1.31-9.228-3.471l8.874-8.882a.5.5 0 0 1 .708 0zm1.406-1.423l-8.865-8.873a2.5 2.5 0 0 0-3.538 0l-8.865 8.873A13.95 13.95 0 0 1 2 16C2 8.268 8.268 2 16 2s14 6.268 14 14c0 3.477-1.268 6.658-3.366 9.106M24 11.25a3.25 3.25 0 1 0-6.5 0a3.25 3.25 0 0 0 6.5 0"></svg:path>`,
})
export class FluentImageCircle32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
