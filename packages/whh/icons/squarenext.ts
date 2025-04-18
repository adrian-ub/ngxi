import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquarenextIcon],svg[whh-squarenext-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-704q0-26-18.5-45t-45.5-19h-64q-26 0-45 19t-19 45v384q0 27 19 45.5t45 18.5h64q27 0 45.5-18.5t18.5-45.5zm377 173l-218-231q-13-14-31 6v488q19 20 31 7l218-231q7-8 7-19.5t-7-19.5"></svg:path>`,
})
export class WhhSquarenextIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
