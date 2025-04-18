import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderVideoLineIcon],svg[ri-folder-video-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19V5h5.586l2 2H20v12zM21 5h-8.586l-2-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-6 7.667l-4.878-3.253a.4.4 0 0 0-.622.333v6.505a.4.4 0 0 0 .622.333L15 13.333a.4.4 0 0 0 0-.666"></svg:path>`,
})
export class RiFolderVideoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
