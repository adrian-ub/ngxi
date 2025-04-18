import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRssSolidIcon],svg[teenyicons-rss-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15C14 7.268 7.732 1 0 1V0c8.284 0 15 6.716 15 15z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 13.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 15a9 9 0 0 0-9-9v1a8 8 0 0 1 8 8z"></svg:path>`,
})
export class TeenyiconsRssSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
