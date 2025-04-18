import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHomeActiveIcon],svg[nrk-home-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23 9.195V6.923L12 1L1 6.923v2.272l11-5.923zM3 11l9-4.73L21 11v12H3z" clip-rule="evenodd"></svg:path>`,
})
export class NrkHomeActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
