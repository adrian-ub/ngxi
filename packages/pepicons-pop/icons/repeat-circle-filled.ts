import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopRepeatCircleFilledIcon],svg[pepicons-pop-repeat-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopRepeatCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.519 5.749a.75.75 0 0 1 1.052.13l1.547 1.982a.75.75 0 1 1-1.183.923L17.39 6.8a.75.75 0 0 1 .13-1.052"></svg:path><svg:path d="M19.983 7.727a.75.75 0 0 0-1.052.14l-1.546 2.017a.75.75 0 1 0 1.19.912l1.547-2.017a.75.75 0 0 0-.14-1.052"></svg:path><svg:path d="M5.48 12.323a5 5 0 0 1 5-5h7.86a1 1 0 1 1 0 2h-7.86a3 3 0 0 0-3 3v1a1 1 0 1 1-2 0zm3.008 7.928a.75.75 0 0 1-1.053-.13L5.89 18.14a.75.75 0 1 1 1.182-.923L8.619 19.2a.75.75 0 0 1-.13 1.052"></svg:path><svg:path d="M6.024 18.273a.75.75 0 0 0 1.051-.14l1.547-2.017a.75.75 0 0 0-1.19-.912L5.884 17.22a.75.75 0 0 0 .139 1.052"></svg:path><svg:path d="M20.527 13.677a5 5 0 0 1-5 5H7.666a1 1 0 1 1 0-2h7.86a3 3 0 0 0 3-3v-1a1 1 0 1 1 2 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopRepeatCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopRepeatCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
