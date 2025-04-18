import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPulseIcon],svg[mdi-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h2.79l4.31-8.21l1.18 8.96l3.22-4.09L17.83 13H21v2h-4l-2.33-2.33l-4.75 6.06l-.98-7.42L7 15H3z"></svg:path>`,
})
export class MdiPulseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
