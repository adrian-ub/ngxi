import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorWarning28Icon],svg[fluent-color-warning-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#212121" d="M11.593 4.17c1.045-1.894 3.768-1.895 4.815 0l9.25 16.75c1.012 1.833-.314 4.08-2.407 4.08H4.757c-2.093 0-3.42-2.246-2.408-4.079z"></svg:path><svg:path fill="url(#fluentColorWarning280)" d="M11.593 4.17c1.045-1.894 3.768-1.895 4.815 0l9.25 16.75c1.012 1.833-.314 4.08-2.407 4.08H4.757c-2.093 0-3.42-2.246-2.408-4.079z"></svg:path><svg:path fill="url(#fluentColorWarning281)" d="M15 20a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1.75-3.25a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-1.5 0z"></svg:path><svg:defs><svg:lineargradient id="fluentColorWarning280" x1="5.753" x2="19.714" y1="-.728" y2="27.957" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFCD0F"></svg:stop><svg:stop offset="1" stop-color="#FE8401"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorWarning281" x1="11.333" x2="17.338" y1="9.5" y2="20.638" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A4A4A"></svg:stop><svg:stop offset="1" stop-color="#242424"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorWarning28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
