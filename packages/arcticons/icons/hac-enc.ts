import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHacEncIcon],svg[arcticons-hac-enc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.681 5.5H41.84v37H30.681zM17.319 16.549V5.5H6.161v37h11.158V31.531"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.16 42.5c4.895-8.76 13.068-13.9 24.52-13.9M6.16 32.956c5.238-7.219 13.068-11.305 24.52-11.305M6.16 23.413c5.58-5.677 13.068-8.712 24.52-8.712"></svg:path>`,
})
export class ArcticonsHacEncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
