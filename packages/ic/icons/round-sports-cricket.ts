import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSportsCricketIcon],svg[ic-round-sports-cricket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.05 12.81L6.56 4.32a.996.996 0 0 0-1.41 0L2.32 7.15a.996.996 0 0 0 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83a.996.996 0 0 0 0-1.41m-.71 4.95l3.53 3.53c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42l-3.53-3.53z"></svg:path><svg:circle cx="18.5" cy="5.5" r="3.5" fill="currentColor"></svg:circle>`,
})
export class IcRoundSportsCricketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
