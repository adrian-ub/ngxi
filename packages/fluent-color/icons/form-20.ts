import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorForm20Icon],svg[fluent-color-form-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorForm200)" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></svg:path><svg:path fill="url(#fluentColorForm201)" d="M5 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"></svg:path><svg:path fill="url(#fluentColorForm202)" d="M6.5 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="url(#fluentColorForm203)" d="M8 13.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill="url(#fluentColorForm204)" d="M9 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"></svg:path><svg:path fill="url(#fluentColorForm205)" d="M9.5 13a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"></svg:path><svg:defs><svg:lineargradient id="fluentColorForm200" x1="8" x2="13.364" y1="3" y2="16.245" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorForm201" x1="4.5" x2="16.658" y1="4.5" y2="6.658" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorForm202" x1="4.5" x2="16.658" y1="4.5" y2="6.658" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorForm203" x1="4.5" x2="16.658" y1="4.5" y2="6.658" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorForm204" x1="4.5" x2="16.658" y1="4.5" y2="6.658" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorForm205" x1="4.5" x2="16.658" y1="4.5" y2="6.658" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorForm20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
