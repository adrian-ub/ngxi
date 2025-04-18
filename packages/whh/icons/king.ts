import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhKingIcon],svg[whh-king-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 832q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5H64q-26 0-45-18.5T0 960v-64q0-26 19-45t45-19q58 0 106-53t70-140q-101-6-170.5-79.5T0 384q0-106 75-181t181-75q32 0 64 8V64q0-26 19-45t45.5-19t45 19T448 64v72q32-8 64-8q106 0 181 75t75 181q0 102-69.5 175.5T528 639q22 87 70 140t106 53"></svg:path>`,
})
export class WhhKingIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
