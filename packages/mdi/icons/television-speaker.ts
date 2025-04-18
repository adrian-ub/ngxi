import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionSpeakerIcon],svg[mdi-television-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h4v-4H3V5h18v2h2V5c0-1.1-.9-2-2-2zm18 6h-5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2m-2.5 1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S17 12.8 17 12s.7-1.5 1.5-1.5m0 10c-1.7 0-3-1.3-3-3c0-1.6 1.3-3 2.9-3h.1c1.7 0 3 1.3 3 3s-1.3 3-3 3m0-4.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5"></svg:path>`,
})
export class MdiTelevisionSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
