import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCallLockedIcon],svg[hugeicons-call-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.778 11.942C2.83 10.29 2.372 8.94 2.096 7.572c-.408-2.024.526-4.001 2.073-5.263c.654-.533 1.404-.35 1.791.343l.873 1.567c.692 1.242 1.038 1.862.97 2.52c-.069.659-.536 1.195-1.469 2.267zm0 0c1.919 3.346 4.93 6.36 8.28 8.28m0 0c1.653.948 3.002 1.406 4.37 1.682c2.024.408 4.001-.526 5.262-2.073c.534-.654.351-1.404-.342-1.791l-1.567-.873c-1.242-.692-1.862-1.038-2.52-.97c-.659.069-1.195.536-2.267 1.469zm3.684-14.04V4.793c0-.205.009-.413.082-.605c.196-.51.713-1.178 1.656-1.178c.942 0 1.48.668 1.675 1.178c.074.192.082.4.082.605v1.39M15.812 12h3.376a1.8 1.8 0 0 0 1.8-1.8v-2a1.8 1.8 0 0 0-1.8-1.8h-3.376a1.8 1.8 0 0 0-1.8 1.8v2a1.8 1.8 0 0 0 1.8 1.8" color="currentColor"></svg:path>`,
})
export class HugeiconsCallLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
