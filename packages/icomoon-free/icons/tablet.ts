import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeTabletIcon],svg[icomoon-free-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 0h-10C1.675 0 1 .675 1 1.5v13c0 .825.675 1.5 1.5 1.5h10c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5m-5 15.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M12 14H3V2h9z"></svg:path>`,
})
export class IcomoonFreeTabletIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
