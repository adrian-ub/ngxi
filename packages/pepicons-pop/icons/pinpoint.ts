import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPinpointIcon],svg[pepicons-pop-pinpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 11.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path><svg:path d="M2.5 8.123C2.5 12.366 6.882 19.5 10 19.5s7.5-7.134 7.5-11.377C17.5 3.917 14.146.5 10 .5S2.5 3.917 2.5 8.123m13 0c0 3.28-3.745 9.377-5.5 9.377s-5.5-6.097-5.5-9.377C4.5 5.013 6.967 2.5 10 2.5s5.5 2.513 5.5 5.623"></svg:path></svg:g>`,
})
export class PepiconsPopPinpointIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
