import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDatabaseArrowRight24FilledIcon],svg[fluent-database-arrow-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4m6.328.17A7.6 7.6 0 0 0 20 9.053v2.445a6.5 6.5 0 0 0-7.209 10.482q-.39.02-.791.02c-4.418 0-8-1.79-8-4V9.053a7.6 7.6 0 0 0 1.672 1.117C7.37 11.018 9.608 11.5 12 11.5s4.63-.482 6.328-1.33M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-3 5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L19.293 17z"></svg:path>`,
})
export class FluentDatabaseArrowRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
