import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserMultipleWindowSolidIcon],svg[streamline-browser-multiple-window-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.442 8.224V3.36H4.39v1.194a.75.75 0 1 1-1.5 0v-2.82C2.89.793 3.652.03 4.594.03h7.644c.941 0 1.704.763 1.704 1.704v6.49c0 .94-.763 1.704-1.704 1.704h-.776a.75.75 0 0 1 0-1.5h.776a.204.204 0 0 0 .204-.204M1.605 9.827v2.406c0 .113.091.204.204.204h6.046a.204.204 0 0 0 .205-.204V9.827zm6.25-3.33H1.81c-.941 0-1.704.763-1.704 1.704v4.032c0 .941.763 1.704 1.704 1.704h6.046c.941 0 1.705-.763 1.705-1.704V8.2c0-.941-.764-1.704-1.705-1.704Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserMultipleWindowSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
