import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhQueenIcon],svg[whh-queen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 192L768 640q-5 17-50 36.5T608 704q26 61 68 94.5t92 33.5q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5T768 1024H128q-26 0-45-18.5T64 960v-64q0-26 19-45t45-19q50 0 92-33.5t68-94.5q-67-8-111-26.5T128 640L0 192l192 165V64l154 256L448 0l102 320L704 64v293z"></svg:path>`,
})
export class WhhQueenIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
