import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataTrending24FilledIcon],svg[fluent-data-trending-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4a1 1 0 0 0-2 0v13.5A3.5 3.5 0 0 0 6.5 21H20a1 1 0 1 0 0-2H6.5A1.5 1.5 0 0 1 5 17.5zm10 2a1 1 0 1 0 0 2h2.086l-3.836 3.836l-1.793-1.793a1 1 0 0 0-1.414 0l-3.25 3.25a1 1 0 1 0 1.414 1.414l2.543-2.543l1.793 1.793a1 1 0 0 0 1.414 0l4.544-4.543L18.5 11.5a1 1 0 1 0 2 0l.002-4.5a1 1 0 0 0-1-1z"></svg:path>`,
})
export class FluentDataTrending24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
