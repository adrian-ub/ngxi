import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainArtixlinuxIcon],svg[devicon-plain-artixlinux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64.002 0L41.996 45.123l-.004.002l.002.002l-.002.004l60.572 33.935zm-28.66 58.764l-33.77 69.234l100.201-41.396zm73.842 33.873l-.004.006l-31.6 18.138l48.842 17.215l.004.002h.002l-8.73-17.9z"></svg:path>`,
})
export class DeviconPlainArtixlinuxIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
