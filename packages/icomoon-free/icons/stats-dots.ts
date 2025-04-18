import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeStatsDotsIcon],svg[icomoon-free-stats-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14h14v2H0V0h2zm2.5-1a1.5 1.5 0 1 1 .131-2.994l1.612-2.687a1.5 1.5 0 1 1 2.514 0l1.612 2.687a1.4 1.4 0 0 1 .23-.002l2.662-4.658a1.5 1.5 0 1 1 1.14.651l-2.662 4.658a1.5 1.5 0 1 1-2.496.026L7.631 7.994a1.4 1.4 0 0 1-.262 0l-1.612 2.687A1.5 1.5 0 0 1 4.5 13"></svg:path>`,
})
export class IcomoonFreeStatsDotsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
