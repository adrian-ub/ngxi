import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPersonCheckmarkCircleFilledIcon],svg[pepicons-pop-person-checkmark-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopPersonCheckmarkCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 8c-.792 0-1.5.679-1.5 1.6s.708 1.6 1.5 1.6s1.5-.679 1.5-1.6S10.792 8 10 8M6.5 9.6C6.5 7.65 8.03 6 10 6s3.5 1.65 3.5 3.6s-1.53 3.6-3.5 3.6s-3.5-1.65-3.5-3.6"></svg:path><svg:path d="M4 17.833c0-3.295 2.79-5.766 6.013-5.766c3.232 0 5.987 2.478 5.987 5.766V20a1 1 0 1 1-2 0v-2.167c0-2.08-1.753-3.766-3.987-3.766c-2.24 0-4.013 1.692-4.013 3.766l.002 2.166a1 1 0 0 1-2 .002zM21.597 7.126a1 1 0 0 1 .388 1.36l-2.777 5a1 1 0 1 1-1.749-.972l2.778-5a1 1 0 0 1 1.36-.388"></svg:path><svg:path d="M14.775 10.153a1 1 0 0 1 1.405-.156l2.778 2.222a1 1 0 1 1-1.25 1.562l-2.777-2.222a1 1 0 0 1-.156-1.406"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopPersonCheckmarkCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopPersonCheckmarkCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
