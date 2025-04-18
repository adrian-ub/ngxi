import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFlag24Icon],svg[fluent-color-flag-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorFlag240)" d="M4.5 21.25V15.5H3.007L3 21.25l.007.102A.75.75 0 0 0 3.75 22l.102-.007a.75.75 0 0 0 .648-.743"></svg:path><svg:path fill="url(#fluentColorFlag241)" d="M3.75 2.998a.75.75 0 0 0-.75.75V16a.5.5 0 0 0 .5.5h16.754a.75.75 0 0 0 .6-1.2L16.69 9.75l4.164-5.552a.75.75 0 0 0-.6-1.2z"></svg:path><svg:defs><svg:lineargradient id="fluentColorFlag240" x1="4.5" x2="4.069" y1="24.089" y2="15.729" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#889096"></svg:stop><svg:stop offset="1" stop-color="#63686E"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorFlag241" x1="-.939" x2="6.516" y1="-.86" y2="17.385" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorFlag24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
