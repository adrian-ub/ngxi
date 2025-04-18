import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeartBroken16FilledIcon],svg[fluent-heart-broken-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.354 3.775a3.25 3.25 0 0 0-4.408.161a3.25 3.25 0 0 0 .012 4.595l4.707 4.708a.5.5 0 0 0 .707 0l4.683-4.68a3.25 3.25 0 0 0-.012-4.594a3.25 3.25 0 0 0-4.601-.012l-.028.028L7.16 5.903l2.162 1.825a.5.5 0 0 1 .032.736l-1.5 1.5a.5.5 0 0 1-.708-.707L8.262 8.14L6.178 6.382a.5.5 0 0 1-.097-.655z"></svg:path>`,
})
export class FluentHeartBroken16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
