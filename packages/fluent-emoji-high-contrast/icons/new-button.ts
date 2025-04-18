import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastNewButtonIcon],svg[fluent-emoji-high-contrast-new-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.434 12.402a.75.75 0 0 0-1.387.395v6.453a.75.75 0 0 0 1.5 0v-3.38c0-.127.165-.173.231-.066l2.381 3.841a.75.75 0 0 0 1.388-.395v-6.453a.75.75 0 0 0-1.5 0v3.38c0 .126-.165.173-.231.066zm6.336-.315a.75.75 0 0 0-.75.75v6.407c0 .415.337.75.75.75h3.633a.75.75 0 0 0 0-1.5h-2.757a.125.125 0 0 1-.125-.125v-1.33c0-.069.056-.125.125-.125h2.709a.75.75 0 0 0 0-1.5h-2.71a.125.125 0 0 1-.124-.125v-1.577c0-.07.056-.125.125-.125h2.757a.75.75 0 0 0 0-1.5zm6.906.571a.75.75 0 0 0-1.445.403l1.75 6.28a.75.75 0 0 0 1.442.01l1.006-3.456c.035-.12.203-.12.24-.001l1.05 3.464a.75.75 0 0 0 1.444-.026l1.656-6.281a.75.75 0 0 0-1.45-.383l-.87 3.297c-.032.122-.204.125-.24.004l-1.01-3.327a.75.75 0 0 0-1.438.008l-.97 3.331c-.035.121-.206.12-.24-.001z"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastNewButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
