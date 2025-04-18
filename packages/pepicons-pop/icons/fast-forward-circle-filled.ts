import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFastForwardCircleFilledIcon],svg[pepicons-pop-fast-forward-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFastForwardCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M14.363 12.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V8.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M12.264 13L10 10.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L9.73 7.355C9.111 6.69 8 7.129 8 8.037v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path><svg:path d="M19.363 12.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V8.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M17.264 13L15 10.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L14.73 7.355c-.619-.665-1.73-.226-1.73.682v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFastForwardCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFastForwardCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
