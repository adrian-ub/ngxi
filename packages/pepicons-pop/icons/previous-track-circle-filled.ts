import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPreviousTrackCircleFilledIcon],svg[pepicons-pop-previous-track-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopPreviousTrackCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M13.137 12.318a1 1 0 0 0 0 1.364l4.632 4.963c.62.664 1.731.226 1.731-.682V8.037c0-.908-1.112-1.346-1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="m15.236 13l2.264-2.426v4.852zm-2.1.682a1 1 0 0 1 0-1.364l4.633-4.963c.62-.664 1.731-.226 1.731.682v9.926c0 .908-1.112 1.346-1.731.682z" clip-rule="evenodd"></svg:path><svg:path d="M8.137 12.318a1 1 0 0 0 0 1.364l4.632 4.963c.62.664 1.731.226 1.731-.682V8.037c0-.908-1.112-1.346-1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="m10.236 13l2.264-2.426v4.852zm-2.1.682a1 1 0 0 1 0-1.364l4.633-4.963c.62-.664 1.731-.226 1.731.682v9.926c0 .908-1.112 1.346-1.731.682z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.5 7a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopPreviousTrackCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopPreviousTrackCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
