import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArchive32RegularIcon],svg[fluent-archive-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v2a3 3 0 0 1-1 2.236V23.5a5.5 5.5 0 0 1-5.5 5.5h-13A5.5 5.5 0 0 1 4 23.5V10.236C3.386 9.686 3 8.888 3 8zm3 5v12.5A3.5 3.5 0 0 0 9.5 27h13a3.5 3.5 0 0 0 3.5-3.5V11zm0-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"></svg:path>`,
})
export class FluentArchive32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
