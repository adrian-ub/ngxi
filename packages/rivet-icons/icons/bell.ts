import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsBellIcon],svg[rivet-icons-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14h5.5v-2h-1.382l-.366-.733a2.9 2.9 0 0 1-.298-1.12l-.234-4.209A5.23 5.23 0 0 0 9 1.096V0H7v1.096a5.23 5.23 0 0 0-4.22 4.842l-.234 4.209a2.9 2.9 0 0 1-.298 1.12L1.882 12H.5v2H6a2 2 0 1 0 4 0m1.886-2H4.114a4.9 4.9 0 0 0 .429-1.742l.234-4.209a3.228 3.228 0 0 1 6.446 0l.234 4.209A4.9 4.9 0 0 0 11.886 12"></svg:path>`,
})
export class RivetIconsBellIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
