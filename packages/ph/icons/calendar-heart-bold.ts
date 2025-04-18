import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCalendarHeartBoldIcon],svg[ph-calendar-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h16a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16ZM152 84a35.86 35.86 0 0 0-24 9.19A36 36 0 0 0 68 120c0 17 9.53 33.56 28.32 49.22a151.5 151.5 0 0 0 26.31 17.51a12 12 0 0 0 10.74 0a151.5 151.5 0 0 0 26.31-17.51C178.47 153.56 188 137 188 120a36 36 0 0 0-36-36m-24 78.29c-13.15-7.86-36-25.06-36-42.29a12 12 0 0 1 24 0a12 12 0 0 0 24 0a12 12 0 0 1 24 0c0 17.23-22.86 34.44-36 42.29"></svg:path>`,
})
export class PhCalendarHeartBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
