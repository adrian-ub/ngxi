import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPortraitIcon],svg[game-icons-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M105 25v462h302V25zm30 30h242v402H135zm121 34c-23.3 0-44.6 12.5-60.7 33.9c-16 21.4-26.3 51.6-26.3 85.1s10.3 63.7 26.3 85.1c16.1 21.4 37.4 33.9 60.7 33.9s44.6-12.5 60.7-33.9c16-21.4 26.3-51.6 26.3-85.1s-10.3-63.7-26.3-85.1C300.6 101.5 279.3 89 256 89m-64 110h128v18H192zm48 48h32v18h-32zm-39.7 77.2c-5.1 1.9-10 3.9-14.6 6c-10.5 4.8-19.5 10-25.4 14.7c-5.9 4.6-7.3 9.1-7.3 7.1v87h206v-87c0 2-1.4-2.5-7.3-7.1c-5.9-4.7-14.9-9.9-25.4-14.7c-4.6-2.1-9.5-4.1-14.6-6c-16 13.1-35.1 20.8-55.7 20.8s-39.7-7.7-55.7-20.8"></svg:path>`,
})
export class GameIconsPortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
