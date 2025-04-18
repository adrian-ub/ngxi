import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderSendIcon],svg[lets-icons-folder-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M5 12V9c0-1.886 0-2.828.586-3.414S7.114 5 9 5h.343c.818 0 1.226 0 1.594.152s.657.442 1.235 1.02l.656.656c.579.578.867.868 1.235 1.02S14.84 8 15.657 8H17c1.886 0 2.828 0 3.414.586S21 10.114 21 12v3c0 1.886 0 2.828-.586 3.414S18.886 19 17 19h-1M4 16.5h9m0 0L9.5 13m3.5 3.5L9.5 20"></svg:path>`,
})
export class LetsIconsFolderSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
