import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTaobaoLiteIcon],svg[arcticons-taobao-lite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 7.792a15.8 15.8 0 0 1 4.827 4.291m-4.559 4.881c10.529 7.165 6.8 13.964.805 20.704M18.412 5.11c-.267 8.068-3.715 10.308-6.544 13.035m18.807 19.241c-1.838-.173-4.022-.862-6.632-2.345"></svg:path><svg:path d="M17.644 10.271a49 49 0 0 1 13.265-2.64c8.201-.295 10.77 4.217 11.317 9.602c.545 5.358.312 9.435-1.027 12.716M19.88 17.51h12.658m-6.978.21v13.417m-10.206-7.253h19.47m-4.076 2.038l1.52 5.324m-.557-1.952c-2.233.704-13.314 5.633-15.767-2.353m6.597-12.981l-5.149 6.866"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M44.5 35.89a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></svg:path><svg:path d="M35.5 31.89v8h4"></svg:path></svg:g>`,
})
export class ArcticonsTaobaoLiteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
