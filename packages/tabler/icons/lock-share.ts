import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLockShareIcon],svg[tabler-lock-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path><svg:path d="M12 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M8 11V7a4 4 0 1 1 8 0v4m0 11l5-5m0 4.5V17h-4.5"></svg:path></svg:g>`,
})
export class TablerLockShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
