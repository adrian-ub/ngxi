import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayHorizontalBrokenIcon],svg[solar-video-frame-play-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21.5 17h-19m19-10h-19M12 2v5m0 15v-5m5-14.5V7m0 14.5V17M7 2.5V7m0 14.5V17m7-5c0-.528-.53-.884-1.589-1.596c-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12s0 2.148.4 2.413s.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12Z"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.817.817 1.178 1.91 1.338 3.536M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.816-.816-1.177-1.91-1.337-3.535"></svg:path></svg:g>`,
})
export class SolarVideoFramePlayHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
