import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaTheaterActiveIcon],svg[nrk-media-theater-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12v10h12V12zm10 2v6h-8v-6z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 6.6L2.7 1.3L1.3 2.7L6.6 8H2v2h8V2H8zM20 10V4h-8V2h10v8zM4 12v8h4v2H2V12z"></svg:path>`,
})
export class NrkMediaTheaterActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
