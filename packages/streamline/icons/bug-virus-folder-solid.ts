import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBugVirusFolderSolidIcon],svg[streamline-bug-virus-folder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.198 0A1.5 1.5 0 0 1 6.69 1.14l.003.01l.192.85h5.6a1.5 1.5 0 0 1 1.5 1.5v2.188a2 2 0 0 0-2.378-.016a4.33 4.33 0 0 0-4.164 0a2 2 0 0 0-2.72 2.891a1.998 1.998 0 0 0 0 3.374a2 2 0 0 0-.329.563H1.515a1.5 1.5 0 0 1-1.5-1.5V1.5a1.5 1.5 0 0 1 1.5-1.5zm.51 6.784a.75.75 0 0 1 1.06-.05l.781.709a2.83 2.83 0 0 1 3.95 0l.782-.71a.75.75 0 1 1 1.008 1.11l-1.022.93q.086.338.087.695V9.5h.897a.75.75 0 0 1 0 1.5h-.897v.032q0 .356-.087.696l1.023.928a.75.75 0 1 1-1.009 1.11l-.781-.709a2.83 2.83 0 0 1-3.95 0l-.782.71a.75.75 0 0 1-1.008-1.11l1.022-.93a2.8 2.8 0 0 1-.086-.695V11h-.898a.75.75 0 0 1 0-1.5h.898v-.032q.001-.357.086-.695l-1.022-.93a.75.75 0 0 1-.051-1.059Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBugVirusFolderSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
