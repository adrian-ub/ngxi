import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDatabase24FilledIcon],svg[fluent-database-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4m6.328.17A7.6 7.6 0 0 0 20 9.053V18c0 2.21-3.582 4-8 4s-8-1.79-8-4V9.053a7.6 7.6 0 0 0 1.672 1.117C7.37 11.018 9.608 11.5 12 11.5s4.63-.482 6.328-1.33"></svg:path>`,
})
export class FluentDatabase24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
