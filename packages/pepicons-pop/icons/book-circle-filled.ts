import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookCircleFilledIcon],svg[pepicons-pop-book-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBookCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14 8.297a1 1 0 0 0-.838-.987L5.323 6.026A2 2 0 0 0 3 8v9.737a2 2 0 0 0 1.69 1.976l8.155 1.275A1 1 0 0 0 14 20zm-9 9.44V8l7 1.147v9.684z"></svg:path><svg:path d="M23 8a2 2 0 0 0-2.323-1.974L12.838 7.31a1 1 0 0 0-.838.987V20a1 1 0 0 0 1.155.988l8.154-1.276A2 2 0 0 0 23 17.737zm-2 9.737l-7 1.094V9.147L21 8z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBookCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBookCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
