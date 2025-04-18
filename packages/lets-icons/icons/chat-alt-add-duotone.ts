import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAltAddDuotoneIcon],svg[lets-icons-chat-alt-add-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M20 12c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 4 14.8 4 12 4s-4.2 0-5.27.545A5 5 0 0 0 4.545 6.73C4 7.8 4 9.2 4 12v6c0 .943 0 1.414.293 1.707S5.057 20 6 20h6c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C20 16.2 20 14.8 20 12"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9 12h6m-3-3v6"></svg:path></svg:g>`,
})
export class LetsIconsChatAltAddDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
