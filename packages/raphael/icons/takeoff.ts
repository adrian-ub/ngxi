import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelTakeoffIcon],svg[raphael-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.27 19.267s9.375-1.98 16.074-8.68c0 0 1.395-1.34-1.338-1.34c-2.305 0-5.6 2.438-5.6 2.438l-9.137-1.42l-1.77 1.77l4.983 2.41l-3 2.035l-2.572-1.285l-1.82.857s1.93 2.01 4.18 3.215m-7.02 3.84v1.997h24.5v-1.998H3.25z"></svg:path>`,
})
export class RaphaelTakeoffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
