import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusArrowLeftIcon],svg[nimbus-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.15 6.69l7.71-5.14l.7 1l-7.12 4.78H15.5v1.25H2.74l6.83 4.86l-.72 1L1.15 9A1.42 1.42 0 0 1 .5 7.83a1.4 1.4 0 0 1 .65-1.14"></svg:path>`,
})
export class NimbusArrowLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
