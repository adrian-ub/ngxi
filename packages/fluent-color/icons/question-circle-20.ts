import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorQuestionCircle20Icon],svg[fluent-color-question-circle-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorQuestionCircle200)" d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16"></svg:path><svg:path fill="url(#fluentColorQuestionCircle201)" d="M10 13.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m0-8A2.5 2.5 0 0 0 7.5 8a.5.5 0 0 0 1 0a1.5 1.5 0 1 1 2.632.984l-.106.11l-.118.1l-.247.185a3 3 0 0 0-.356.323C9.793 10.248 9.5 10.988 9.5 12a.5.5 0 0 0 1 0c0-.758.196-1.254.535-1.614l.075-.076l.08-.073l.088-.072l.219-.163l.154-.125A2.5 2.5 0 0 0 10 5.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorQuestionCircle200" x1="2" x2="18" y1="2" y2="18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorQuestionCircle201" x1="7.937" x2="10.765" y1="5.667" y2="15.26" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#CCEAFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorQuestionCircle20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
