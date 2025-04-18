import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSbbPRailIcon],svg[arcticons-sbb-p-rail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 33.137v-9.534h3.121a3.202 3.202 0 0 1 0 6.404H12.5m16.684 3.13v-9.534h3.121a3.202 3.202 0 0 1 0 6.404h-3.121m3.121 0l3.121 3.127M21.617 28.37h4.766M24 25.987v4.766M12.5 20.028h23m-23 16.684h23M26.87 6.041l2.865 2.868l-2.867 2.867m-5.739 0L18.265 8.91l2.867-2.868m-2.867 2.867h11.47M24 6.041v5.736"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.421 15.318h39.158"></svg:path>`,
})
export class ArcticonsSbbPRailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
