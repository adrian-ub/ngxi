import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeDrawerIcon],svg[icomoon-free-drawer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.89 10.188l-4-5A.5.5 0 0 0 11.5 5h-7a.5.5 0 0 0-.39.188l-4 5A.5.5 0 0 0 0 10.5V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.11-.312M15 11h-3.5l-2 2h-3l-2-2H1v-.325L4.74 6h6.519l3.74 4.675z"></svg:path><svg:path fill="currentColor" d="M11.5 8h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1m1 2h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1"></svg:path>`,
})
export class IcomoonFreeDrawerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
