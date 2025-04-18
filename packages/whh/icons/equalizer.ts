import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEqualizerIcon],svg[whh-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.85 704h-192q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-160-640q0-27 18.5-45.5T896.85 0t45.5 18.5t18.5 45.5v448h-128zm-224 320h-192q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-160-320q0-27 19-45.5t45-18.5t45 18.5t19 45.5v128h-128zm-224 768h-192q-13 0-22.5-9.5T.85 800v-64q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-160-768q0-27 18.5-45.5T128.85 0t45.5 18.5t18.5 45.5v576h-128zm128 896q0 26-18.5 45t-45.5 19t-45.5-19t-18.5-45v-64h128zm384 0q0 26-19 45t-45 19t-45-19t-19-45V448h128zm384 0q0 26-19 45t-45.5 19t-45-19t-18.5-45V768h128z"></svg:path>`,
})
export class WhhEqualizerIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
