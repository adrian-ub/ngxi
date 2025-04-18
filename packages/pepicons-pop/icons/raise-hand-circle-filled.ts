import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopRaiseHandCircleFilledIcon],svg[pepicons-pop-raise-hand-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopRaiseHandCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.5 9a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M10 11.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"></svg:path><svg:path d="M5 7a2.5 2.5 0 0 1 5 0v3.272c0 .883.31 1.737.874 2.415l1.394 1.673a1 1 0 1 1-1.536 1.28l-1.394-1.673A5.77 5.77 0 0 1 8 10.272V7a.5.5 0 0 0-1 0v3.75a4 4 0 0 0 .47 1.882l3.412 6.397a1 1 0 0 1-1.764.942l-3.412-6.398A6 6 0 0 1 5 10.75z"></svg:path><svg:path d="M10.5 15a1 1 0 0 1 1-1H14a6 6 0 0 1 6 6v2a1 1 0 1 1-2 0v-2a4 4 0 0 0-4-4h-2.5a1 1 0 0 1-1-1m-.5 3.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopRaiseHandCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopRaiseHandCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
