import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorMail16Icon],svg[fluent-color-mail-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#367AF2" d="M14 5H2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"></svg:path><svg:path fill="url(#fluentColorMail160)" d="M14 5H2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"></svg:path><svg:path fill="url(#fluentColorMail161)" d="M14 5H2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"></svg:path><svg:path fill="url(#fluentColorMail162)" fill-opacity=".75" d="M14 5H2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"></svg:path><svg:path fill="url(#fluentColorMail163)" fill-opacity=".7" d="M14 5H2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"></svg:path><svg:path fill="url(#fluentColorMail164)" d="M4 3a2 2 0 0 0-2 2v.84l5.763 3.103a.5.5 0 0 0 .474 0L14 5.84V5a2 2 0 0 0-2-2z"></svg:path><svg:defs><svg:lineargradient id="fluentColorMail160" x1="9.523" x2="13.026" y1="6.568" y2="12.814" gradientUnits="userSpaceOnUse"><svg:stop offset=".228" stop-color="#0094F0" stop-opacity="0"></svg:stop><svg:stop offset=".431" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorMail161" x1="6.286" x2="2.394" y1="5.842" y2="13.198" gradientUnits="userSpaceOnUse"><svg:stop offset=".228" stop-color="#0094F0" stop-opacity="0"></svg:stop><svg:stop offset=".431" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorMail162" x1="11.164" x2="11.756" y1="9.773" y2="13.726" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2764E7" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorMail163" x1="9.857" x2="10.938" y1="5.982" y2="14.034" gradientUnits="userSpaceOnUse"><svg:stop offset=".533" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorMail164" x1="5.565" x2="12.316" y1=".507" y2="12.725" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset=".462" stop-color="#29C3FF"></svg:stop><svg:stop offset="1" stop-color="#4894FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorMail16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
