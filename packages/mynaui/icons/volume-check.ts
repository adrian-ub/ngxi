import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiVolumeCheckIcon],svg[mynaui-volume-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 3v18c-3.5 0-6.1-4.58-6.1-4.58s-3.9.586-3.9-1V8.505c0-1.586 3.9-1 3.9-1S9.5 3 13 3m3.36 9.323l1.379 1.575a.3.3 0 0 0 .466-.022l2.8-3.876"></svg:path>`,
})
export class MynauiVolumeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
