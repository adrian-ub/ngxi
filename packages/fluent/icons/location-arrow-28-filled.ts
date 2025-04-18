import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationArrow28FilledIcon],svg[fluent-location-arrow-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.959 2.104c1.213-.467 2.405.725 1.938 1.938L17.821 25.04c-.522 1.36-2.48 1.251-2.85-.157l-2.358-8.96a.75.75 0 0 0-.535-.534l-8.96-2.358c-1.408-.37-1.515-2.328-.156-2.85z"></svg:path>`,
})
export class FluentLocationArrow28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
