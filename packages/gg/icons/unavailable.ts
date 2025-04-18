import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggUnavailableIcon],svg[gg-unavailable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.364 5.636A9 9 0 1 1 5.636 18.364A9 9 0 0 1 18.364 5.636m-2.172 11.97L6.393 7.808a7.001 7.001 0 0 0 9.8 9.8M16.95 7.05a7 7 0 0 1 .657 9.142l-9.8-9.799a7 7 0 0 1 9.143.657" clip-rule="evenodd"></svg:path>`,
})
export class GgUnavailableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
