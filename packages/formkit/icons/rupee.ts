import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitRupeeIcon],svg[formkit-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"></svg:path><svg:path fill="currentColor" d="M6.5 9h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1C7.33 8 8 7.33 8 6.5S7.33 5 6.5 5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1a2.5 2.5 0 0 1 0 5"></svg:path><svg:path fill="currentColor" d="M10.5 7h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5c.28 0 .5.22.5.5s-.22.5-.5.5m-3 7c-.16 0-.32-.08-.42-.22l-2-3a.498.498 0 0 1 .83-.55l2 3c.15.23.09.54-.14.69c-.09.06-.18.08-.28.08Z"></svg:path>`,
})
export class FormkitRupeeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
