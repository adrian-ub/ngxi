import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSync12FilledIcon],svg[fluent-arrow-sync-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.423 2.925a.6.6 0 0 0 0-.849L6.173.826a.6.6 0 0 0-.849.849l.248.247a4.1 4.1 0 0 0-2.75 6.67a.6.6 0 0 0 .93-.759A2.9 2.9 0 0 1 5.51 3.141l-.186.185a.6.6 0 0 0 .849.849zm.701.23a.6.6 0 0 0-.022.85A2.9 2.9 0 0 1 6.488 8.86l.185-.185a.6.6 0 0 0-.849-.849l-1.25 1.25a.6.6 0 0 0 0 .849l1.25 1.25a.6.6 0 0 0 .849-.849l-.248-.248a4.1 4.1 0 0 0 2.547-6.9a.6.6 0 0 0-.848-.022"></svg:path>`,
})
export class FluentArrowSync12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
