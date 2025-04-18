import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleBoldIcon],svg[ph-car-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 100h-8.2l-26.72-60.12A20 20 0 0 0 186.8 28H69.2a20 20 0 0 0-18.28 11.88L24.2 100H16a12 12 0 0 0 0 24h4v76a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-12h80v12a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-76h4a12 12 0 0 0 0-24M71.8 52h112.4l21.33 48H50.47ZM212 196h-20v-20a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v20H44v-72h168Z"></svg:path>`,
})
export class PhCarSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
