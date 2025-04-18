import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPreviousTrackIcon],svg[pepicons-previous-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.137 9.318a1 1 0 0 0 0 1.364l4.632 4.963c.62.664 1.731.226 1.731-.682V5.037c0-.908-1.112-1.346-1.731-.682l-4.632 4.963Z"></svg:path><svg:path fill-rule="evenodd" d="M12.236 10L14.5 7.574v4.852L12.236 10Zm-2.1.682a1 1 0 0 1 0-1.364l4.633-4.963c.62-.664 1.731-.226 1.731.682v9.926c0 .908-1.112 1.346-1.731.682l-4.632-4.963Z" clip-rule="evenodd"></svg:path><svg:path d="M5.137 9.318a1 1 0 0 0 0 1.364l4.632 4.963c.62.664 1.731.226 1.731-.682V5.037c0-.908-1.112-1.346-1.731-.682L5.137 9.318Z"></svg:path><svg:path fill-rule="evenodd" d="M7.236 10L9.5 7.574v4.852L7.236 10Zm-2.1.682a1 1 0 0 1 0-1.364L9.77 4.355c.62-.664 1.731-.226 1.731.682v9.926c0 .908-1.112 1.346-1.731.682l-4.632-4.963Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4.5 4a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPreviousTrackIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
