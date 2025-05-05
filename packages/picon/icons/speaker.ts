import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSpeakerIcon],svg[picon-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c0-3 4-3 4 0S2 8 2 5M1 8h6V0H1m2 2V1h2v1M3 5l1-1l1 1l-1 1"></svg:path>`,
})
export class PiconSpeakerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
