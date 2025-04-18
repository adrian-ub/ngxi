import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaTheaterIcon],svg[nrk-media-theater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10V4h-8V2h10v8zM4 12v8h4v2H2V12z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4 5.4V10H2V2h8v2H5.4l5.3 5.3l-1.4 1.4zm6 6.6v10h12V12zm10 2v6h-8v-6z"></svg:path>`,
})
export class NrkMediaTheaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
