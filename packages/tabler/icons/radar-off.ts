import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRadarOffIcon],svg[tabler-radar-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.291 11.295A1 1 0 0 0 12 13v8c2.488 0 4.74-1.01 6.37-2.642m1.675-2.319A8.96 8.96 0 0 0 21 12h-5m0-3a5 5 0 0 0-5.063-1.88M8.471 8.467a5 5 0 0 0 .53 7.535"></svg:path><svg:path d="M20.486 9A9 9 0 0 0 7.961 3.968M5.644 5.643a9 9 0 0 0 3.36 14.852M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerRadarOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
