import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGuest12FilledIcon],svg[fluent-guest-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1A1.5 1.5 0 0 0 2 2.5v7A1.5 1.5 0 0 0 3.5 11h5A1.5 1.5 0 0 0 10 9.5v-7A1.5 1.5 0 0 0 8.5 1zm2 1h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1M7 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M4 7.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5C8 8.5 7 9 6 9s-2-.5-2-1.5"></svg:path>`,
})
export class FluentGuest12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
