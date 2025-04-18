import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmSpeakerIcon],svg[charm-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.25 1.75h9.5v12.5h-9.5zm5 2.5h-.5"></svg:path><svg:circle cx="8" cy="9.5" r="2.25"></svg:circle></svg:g>`,
})
export class CharmSpeakerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
