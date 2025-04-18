import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFlag32Icon],svg[fluent-color-flag-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorFlag320)" d="M6 29a1 1 0 0 1-1-1v-9h2v9a1 1 0 0 1-1 1"></svg:path><svg:path fill="url(#fluentColorFlag321)" d="M5 4.5A1.5 1.5 0 0 1 6.5 3H28a1 1 0 0 1 .8 1.6L23.25 12l5.55 7.4A1 1 0 0 1 28 21H6.5A1.5 1.5 0 0 1 5 19.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorFlag320" x1="7" x2="6.235" y1="32.214" y2="19.363" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#889096"></svg:stop><svg:stop offset="1" stop-color="#63686E"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorFlag321" x1="-.25" x2="9.688" y1="-2.143" y2="22.178" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorFlag32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
