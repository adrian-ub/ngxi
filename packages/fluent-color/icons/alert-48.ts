import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAlert48Icon],svg[fluent-color-alert-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAlert480)" d="M29.993 38a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></svg:path><svg:path fill="url(#fluentColorAlert481)" d="M24 4C15.716 4 9 10.716 9 19v8.487l-2.804 6.355A2.25 2.25 0 0 0 8.254 37h31.492a2.25 2.25 0 0 0 2.058-3.158L39 27.487V19c0-8.284-6.716-15-15-15"></svg:path><svg:defs><svg:lineargradient id="fluentColorAlert480" x1="23.993" x2="24.032" y1="36.286" y2="43.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlert481" x1="37.487" x2="10.226" y1="33.333" y2="8.7" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAlert48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
