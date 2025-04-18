import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBananaFilledIcon],svg[tdesign-banana-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.6 1.501l3.3 1.5v5.5c3.04 3.828-.448 11.442-7.691 13.122C6.965 23.304 1 19.5 1 15.501C1 14 1.738 13.195 3 14s3.098 1.683 4.86 2.072C13.223 17.253 17.919 14.5 18.6 8.5z"></svg:path><svg:path fill="currentColor" d="M8.237 15.072C13.11 16.253 17.379 13.5 18 7.5c-.678 1.385-2.064 3.703-7 4c-2.883.173-5.449-.803-6.183-1.152c-.734-.35-1.137.152-.921 1.026s1.26 2.727 4.34 3.697"></svg:path>`,
})
export class TdesignBananaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
