import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBellIcon],svg[picon-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 6l1-1c0-5 4-5 4 0l1 1M3 7h2v1H3"></svg:path>`,
})
export class PiconBellIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
