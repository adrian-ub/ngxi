import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDotlistIcon],svg[whh-dotlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 576h-512q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h512q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m0-384h-512q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h512q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-832 832q-53 0-90.5-37.5T.428 896t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-384q-53 0-90.5-37.5T.428 512t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-384q-53 0-90.5-37.5T.428 128t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m320 576h512q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5h-512q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5"></svg:path>`,
})
export class WhhDotlistIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
