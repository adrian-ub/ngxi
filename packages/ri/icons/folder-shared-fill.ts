import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderSharedFillIcon],svg[ri-folder-shared-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13.126A6 6 0 0 0 13.303 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zM18 17v-3.5l5 4.5l-5 4.5V19h-3v-2z"></svg:path>`,
})
export class RiFolderSharedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
