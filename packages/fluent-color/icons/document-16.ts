import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDocument16Icon],svg[fluent-color-document-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDocument160)" d="M8.004 1L9.5 4.5L13 6l-.008 7.5a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 13.5v-11A1.5 1.5 0 0 1 4.5 1z"></svg:path><svg:path fill="url(#fluentColorDocument162)" fill-opacity=".5" d="M8.004 1L9.5 4.5L13 6l-.008 7.5a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 13.5v-11A1.5 1.5 0 0 1 4.5 1z"></svg:path><svg:path fill="url(#fluentColorDocument161)" d="M8 4.5V1l5 5H9.5A1.5 1.5 0 0 1 8 4.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorDocument160" x1="9.994" x2="11.264" y1="1" y2="12.781" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#4894FE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDocument161" x1="10.492" x2="9.242" y1="3.083" y2="5.167" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorDocument162" cx="0" cy="0" r="1" gradientTransform="rotate(130.372 6.372 3.818)scale(8.35524 4.87457)" gradientUnits="userSpaceOnUse"><svg:stop offset=".362" stop-color="#4A43CB"></svg:stop><svg:stop offset="1" stop-color="#4A43CB" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorDocument16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
