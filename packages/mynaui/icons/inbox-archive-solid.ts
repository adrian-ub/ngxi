import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiInboxArchiveSolidIcon],svg[mynaui-inbox-archive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.76 2.25a2.75 2.75 0 0 1 2.462 1.526a1 1 0 0 1 .051.135l2.163 7.846a8.8 8.8 0 0 1 .314 2.325V19A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19v-4.918c0-.785.106-1.567.314-2.325l2.163-7.846a1 1 0 0 1 .051-.135A2.75 2.75 0 0 1 7.24 2.25zm.31 11.5a1.25 1.25 0 0 0-1.04.557l-.812 1.218a2.75 2.75 0 0 1-2.288 1.225h-1.86a2.75 2.75 0 0 1-2.288-1.225l-.812-1.218a1.25 1.25 0 0 0-1.04-.557H3.758q-.008.165-.008.332V19A1.25 1.25 0 0 0 5 20.25h14A1.25 1.25 0 0 0 20.25 19v-4.918q0-.165-.008-.332zm-6.57-8a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-1.5 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiInboxArchiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
