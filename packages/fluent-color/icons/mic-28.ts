import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorMic28Icon],svg[fluent-color-mic-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorMic280)" d="M7.023 13C6.458 13 6 13.459 6 14.024v.772a8.5 8.5 0 0 0 7.477 8.44v2.74a1.023 1.023 0 0 0 2.046 0v-2.74A8.5 8.5 0 0 0 23 14.795v-.772a1.023 1.023 0 1 0-2.047 0v.772a6.453 6.453 0 1 1-12.906 0v-.773c0-.565-.458-1.023-1.024-1.023"></svg:path><svg:path fill="url(#fluentColorMic281)" d="M14.5 2A4.5 4.5 0 0 0 10 6.5v8a4.5 4.5 0 1 0 9 0v-8A4.5 4.5 0 0 0 14.5 2"></svg:path><svg:defs><svg:lineargradient id="fluentColorMic280" x1="6" x2="15.091" y1="7.03" y2="27.834" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CAD2D9"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorMic281" x1="7.75" x2="17.253" y1="-1.864" y2="28.113" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#CC23D1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorMic28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
