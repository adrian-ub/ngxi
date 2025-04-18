import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashReadingTimeLightIcon],svg[stash-reading-time-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2 4.25a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 0 1h-18a.5.5 0 0 1-.5-.5m14 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6 5a6 6 0 1 1 12 0a6 6 0 0 1-12 0m-8-5a.5.5 0 0 1 .5-.5H8a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5H8a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5H8a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M14.264 11.002A3.7 3.7 0 0 1 16 10.567a.433.433 0 0 1 .433.433v3.07l2.172 2.172a.434.434 0 0 1 0 .613a3.683 3.683 0 1 1-4.341-5.853m1.303.465a2.816 2.816 0 1 0 2.095 5.057l-1.968-1.968a.43.43 0 0 1-.127-.306z"></svg:path></svg:g>`,
})
export class StashReadingTimeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
