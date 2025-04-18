import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusArrowRightIcon],svg[nimbus-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.85 6.69L7.14 1.55l-.7 1l7.12 4.75H.5v1.28h12.76l-6.83 4.86l.72 1L14.85 9a1.42 1.42 0 0 0 .65-1.15a1.4 1.4 0 0 0-.65-1.16"></svg:path>`,
})
export class NimbusArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
