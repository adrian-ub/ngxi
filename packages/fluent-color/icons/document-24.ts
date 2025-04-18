import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDocument24Icon],svg[fluent-color-document-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDocument240)" d="M6 22h12a2 2 0 0 0 2-2V9l-5-2l-2-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2"></svg:path><svg:path fill="url(#fluentColorDocument242)" fill-opacity=".5" d="M6 22h12a2 2 0 0 0 2-2V9l-5-2l-2-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2"></svg:path><svg:path fill="url(#fluentColorDocument241)" d="M13 7.5V2l7 7h-5.5A1.5 1.5 0 0 1 13 7.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorDocument240" x1="15.2" x2="16.822" y1="2" y2="18.87" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#4894FE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDocument241" x1="16.488" x2="14.738" y1="4.917" y2="7.833" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorDocument242" cx="0" cy="0" r="1" gradientTransform="matrix(-8.66665 9.09357 -5.3691 -5.11703 20.667 2.625)" gradientUnits="userSpaceOnUse"><svg:stop offset=".362" stop-color="#4A43CB"></svg:stop><svg:stop offset="1" stop-color="#4A43CB" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorDocument24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
