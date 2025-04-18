import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHotAirBalloonIcon],svg[hugeicons-hot-air-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 8.933C20 14 14.461 18 12 18s-8-4-8-9.067C4 5.104 7.582 2 12 2s8 3.104 8 6.933"></svg:path><svg:path d="M15 8.933C15 14 12.923 18 12 18s-3-4-3-9.067C9 5.104 10.343 2 12 2s3 3.104 3 6.933M9 20c0-.465 0-.698.051-.888a1.5 1.5 0 0 1 1.06-1.06C10.303 18 10.536 18 11 18h2c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06c.052.191.052.424.052.889s0 .698-.051.888a1.5 1.5 0 0 1-1.06 1.06C13.697 22 13.464 22 13 22h-2c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C9 20.697 9 20.464 9 20"></svg:path></svg:g>`,
})
export class HugeiconsHotAirBalloonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
