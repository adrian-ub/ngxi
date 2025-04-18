import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileSyncOutlineIcon],svg[mdi-file-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.8 22H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8l6 6v3.5c-.6-.3-1.3-.4-2-.5V9h-5V4H6v16h5.5c.3.7.8 1.4 1.3 2M17 12l-2.2 2.2l2.2 2.2V15c1.4 0 2.5 1.1 2.5 2.5c0 .4-.1.8-.3 1.1l1.1 1.1c.4-.6.7-1.4.7-2.2c0-2.2-1.8-4-4-4zm2.2 8.8L17 18.5V20c-1.4 0-2.5-1.1-2.5-2.5c0-.4.1-.8.3-1.1l-1.1-1.1c-.4.6-.7 1.4-.7 2.2c0 2.2 1.8 4 4 4V23z"></svg:path>`,
})
export class MdiFileSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
