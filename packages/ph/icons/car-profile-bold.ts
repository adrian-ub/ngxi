import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCarProfileBoldIcon],svg[ph-car-profile-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 108h-23l-42.17-42.14A19.86 19.86 0 0 0 156.69 60H48.28a20 20 0 0 0-16.64 8.91L2 113.34A12 12 0 0 0 0 120v48a20 20 0 0 0 20 20h13.5a34 34 0 0 0 65 0h59a34 34 0 0 0 65 0H236a20 20 0 0 0 20-20v-40a20 20 0 0 0-20-20M50.42 84H155l24 24H34.42ZM66 188a10 10 0 1 1 10-10a10 10 0 0 1-10 10m124 0a10 10 0 1 1 10-10a10 10 0 0 1-10 10m42-24h-11a34 34 0 0 0-62 0H97a34 34 0 0 0-62 0H24v-32h208Z"></svg:path>`,
})
export class PhCarProfileBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
