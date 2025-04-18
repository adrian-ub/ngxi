import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSafeLineIcon],svg[ri-safe-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.005 20h-12v2h-2v-2h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2zm-14-2h16V5h-16zm9-4.126V17h-2v-3.126a4.002 4.002 0 0 1 1-7.874a4 4 0 0 1 1 7.874m-1-1.874a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiSafeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
