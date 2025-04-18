import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDataBackupIcon],svg[flat-color-icons-data-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D1C4E9" d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2"></svg:path><svg:g fill="#2196F3"><svg:path d="m31 30l7 5.6V24.4z"></svg:path><svg:path d="M38 28c-.3 0-.7 0-1 .1v4c.3-.1.7-.1 1-.1c3.3 0 6 2.7 6 6s-2.7 6-6 6s-6-2.7-6-6c0-.3 0-.6.1-.9l-3.4-2.7c-.4 1.1-.7 2.3-.7 3.6c0 5.5 4.5 10 10 10s10-4.5 10-10s-4.5-10-10-10"></svg:path></svg:g>`,
})
export class FlatColorIconsDataBackupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
