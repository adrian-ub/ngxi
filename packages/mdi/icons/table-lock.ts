import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableLockIcon],svg[mdi-table-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16v-.5a2.5 2.5 0 0 0-5 0v.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5zm-7 2h-1v-4h2.26c.28-.79.78-1.5 1.43-2H12V8h6v3.05c.17-.02.33-.05.5-.05c.53 0 1.03.1 1.5.26V6c0-1.11-.89-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9zm-3 0H4v-4h6zm0-6H4V8h6z"></svg:path>`,
})
export class MdiTableLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
