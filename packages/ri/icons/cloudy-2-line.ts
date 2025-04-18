import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCloudy2LineIcon],svg[ri-cloudy-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21M7 19h10a4 4 0 1 0-.426-7.978a5 5 0 1 0-9.148 0A4 4 0 1 0 7 19"></svg:path>`,
})
export class RiCloudy2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
