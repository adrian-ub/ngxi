import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileSyncIcon],svg[mdi-file-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.5c0-3.6 2.9-6.5 6.5-6.5c.9 0 1.7.2 2.5.5V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6.8c-1.1-1.2-1.8-2.8-1.8-4.5m2-14L18.5 9H13zm4 8.5v1.5c2.2 0 4 1.8 4 4c0 .8-.2 1.6-.7 2.2l-1.1-1.1c.2-.3.3-.7.3-1.1c0-1.4-1.1-2.5-2.5-2.5v1.5l-2.2-2.2zm0 11v-1.5c-2.2 0-4-1.8-4-4c0-.8.2-1.6.7-2.2l1.1 1.1c-.2.3-.3.7-.3 1.1c0 1.4 1.1 2.5 2.5 2.5v-1.5l2.2 2.2z"></svg:path>`,
})
export class MdiFileSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
