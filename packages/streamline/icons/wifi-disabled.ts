import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWifiDisabledIcon],svg[streamline-wifi-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l13 13M7 13.25a1.31 1.31 0 1 0 0-2.62a1.31 1.31 0 0 0 0 2.62M4.53 9a3.5 3.5 0 0 1 1.143-.78M2.36 7.31c.609-.612 1.257-.986 1.257-.986m1.933-.781s.592-.165 1.455-.165A6.55 6.55 0 0 1 11.65 7.31M3.482 3.457A9.19 9.19 0 0 1 13.5 5.45m-13 0c.36-.36.732-.657 1.176-.99"></svg:path>`,
})
export class StreamlineWifiDisabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
