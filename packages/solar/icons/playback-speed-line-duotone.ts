import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlaybackSpeedLineDuotoneIcon],svg[solar-playback-speed-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path stroke-dasharray="4 3" stroke-linecap="round" d="M12 22C6.477 22 2 17.523 2 12S6.977 2 12.5 2" opacity=".5"></svg:path><svg:path d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"></svg:path></svg:g>`,
})
export class SolarPlaybackSpeedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
