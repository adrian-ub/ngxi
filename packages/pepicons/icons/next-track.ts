import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsNextTrackIcon],svg[pepicons-next-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.863 9.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V5.037c0-.908 1.112-1.346 1.731-.682l4.632 4.963Z"></svg:path><svg:path fill-rule="evenodd" d="M7.764 10L5.5 7.574v4.852L7.764 10Zm2.1.682a1 1 0 0 0 0-1.364L5.23 4.355c-.62-.664-1.731-.226-1.731.682v9.926c0 .908 1.112 1.346 1.731.682l4.632-4.963Z" clip-rule="evenodd"></svg:path><svg:path d="M14.863 9.318a1 1 0 0 1 0 1.364l-4.632 4.963c-.62.664-1.731.226-1.731-.682V5.037c0-.908 1.112-1.346 1.731-.682l4.632 4.963Z"></svg:path><svg:path fill-rule="evenodd" d="M12.764 10L10.5 7.574v4.852L12.764 10Zm2.1.682a1 1 0 0 0 0-1.364L10.23 4.355c-.62-.664-1.731-.226-1.731.682v9.926c0 .908 1.112 1.346 1.731.682l4.632-4.963Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.5 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsNextTrackIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
