import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameBrokenIcon],svg[solar-video-frame-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 2.5v19M7 2.5v19"></svg:path><svg:path fill="currentColor" d="M2.5 6.25a.75.75 0 0 0 0 1.5zM7 7.75a.75.75 0 0 0 0-1.5zm10-1.5a.75.75 0 0 0 0 1.5zM2.5 7.75H7v-1.5H2.5zm14.5 0h5v-1.5h-5zm4.5 10a.75.75 0 0 0 0-1.5zm-4.5-1.5a.75.75 0 0 0 0 1.5zm-10 1.5a.75.75 0 0 0 0-1.5zm10 0h4.5v-1.5H17zm-15 0h5v-1.5H2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 12h20M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.817.817 1.178 1.91 1.338 3.536M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.816-.816-1.177-1.91-1.337-3.535"></svg:path></svg:g>`,
})
export class SolarVideoFrameBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
