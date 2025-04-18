import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailReadMultiple24FilledIcon],svg[fluent-mail-read-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.36 1.842a.75.75 0 0 0-.72 0l-7.81 4.26a1.6 1.6 0 0 0-.436.35L11 11.145l8.606-4.695a1.6 1.6 0 0 0-.436-.349zM2 15.75V7.945l8.64 4.713a.75.75 0 0 0 .72 0L20 7.945v7.805A3.25 3.25 0 0 1 16.75 19H5.25A3.25 3.25 0 0 1 2 15.75m19.001-8.239a3.25 3.25 0 0 1 1.5 2.739v6a5.25 5.25 0 0 1-5.25 5.25h-9A3.25 3.25 0 0 1 5.51 20h11.74A3.75 3.75 0 0 0 21 16.25z"></svg:path>`,
})
export class FluentMailReadMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
