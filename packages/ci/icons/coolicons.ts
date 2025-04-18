import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCooliconsIcon],svg[ci-coolicons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.286 17.714A5.72 5.72 0 0 1 12 15.78a5.714 5.714 0 1 1-1.7-8.875a7.812 7.812 0 0 0-1.427 2.481a2.857 2.857 0 1 0 1.7 2.612a5.714 5.714 0 1 1 5.714 5.714v.002ZM13.43 12.1a2.857 2.857 0 1 0 0-.1v.1Z"></svg:path>`,
})
export class CiCooliconsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
