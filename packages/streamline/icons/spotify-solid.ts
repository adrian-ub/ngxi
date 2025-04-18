import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSpotifySolidIcon],svg[streamline-spotify-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.5 7a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0m4.659 2.594a4.4 4.4 0 0 1 2.87.302a.625.625 0 1 0 .535-1.13a5.64 5.64 0 0 0-3.69-.39a.625.625 0 1 0 .285 1.218M6.16 7.479q-.761.002-1.468.17a.625.625 0 1 1-.287-1.217a7.64 7.64 0 0 1 5.2.618a.625.625 0 0 1-.565 1.115a6.35 6.35 0 0 0-2.88-.686M4.22 5.705a8.4 8.4 0 0 1 1.94-.226c1.416 0 2.748.35 3.916.97a.625.625 0 0 0 .585-1.105a9.6 9.6 0 0 0-4.5-1.115a9.7 9.7 0 0 0-2.23.26a.625.625 0 1 0 .289 1.216" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSpotifySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
