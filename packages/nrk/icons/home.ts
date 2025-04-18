import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHomeIcon],svg[nrk-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23 9.195V6.923L12 1L1 6.923v2.272l11-5.923zM5 11v10h14V11h2v12H3V11z" clip-rule="evenodd"></svg:path>`,
})
export class NrkHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
