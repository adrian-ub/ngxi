import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidJourneyIcon],svg[icon-park-solid-journey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSJourney0"><svg:g fill="none"><svg:g stroke="#fff" stroke-linecap="round" stroke-width="4" clip-path="url(#ipSJourney1)"><svg:path stroke-linejoin="round" d="M24 40c8.284 0 15-6.716 15-15c0-8.284-6.716-15-15-15c-8.284 0-15 6.716-15 15c0 8.284 6.716 15 15 15Z"></svg:path><svg:path d="M20 11c1.805 1.008 3.5 2.5 3.358 4.445c-.114 1.555-1.443 1.902-1.721 3.026c-.278 1.124 1.33 2.35-1.39 4.165C18.431 23.846 12.97 26.145 9 24"></svg:path><svg:path stroke-linejoin="round" d="M9.5 24.5C6.5 26.388 2.068 31.521 4 35c2.5 4.5 12 .69 23-8S42.23 5.606 42.23 5.606L37 7"></svg:path><svg:path d="M26 40s.5-5 4-8s8-3 8-3"></svg:path></svg:g><svg:defs><svg:clippath id="ipSJourney1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSJourney0)"></svg:path>`,
})
export class IconParkSolidJourneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
