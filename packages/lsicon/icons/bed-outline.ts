import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBedOutlineIcon],svg[lsicon-bed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2.5 12v2m11-2v2m-12-6.5h13V12h-13zm12 0v-3a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v3zm-2 0v-1a1 1 0 1 0-2 0v1zm-5 0v-1a1 1 0 0 0-2 0v1z"></svg:path>`,
})
export class LsiconBedOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
