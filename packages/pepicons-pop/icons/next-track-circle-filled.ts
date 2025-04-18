import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopNextTrackCircleFilledIcon],svg[pepicons-pop-next-track-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopNextTrackCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M12.863 12.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V8.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M10.764 13L8.5 10.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L8.23 7.355c-.62-.664-1.731-.226-1.731.682v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path><svg:path d="M17.863 12.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V8.037c0-.908 1.112-1.346 1.731-.682z"></svg:path><svg:path fill-rule="evenodd" d="M15.764 13L13.5 10.574v4.852zm2.1.682a1 1 0 0 0 0-1.364L13.23 7.355c-.62-.664-1.731-.226-1.731.682v9.926c0 .908 1.112 1.346 1.731.682z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M18.5 7a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopNextTrackCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopNextTrackCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
