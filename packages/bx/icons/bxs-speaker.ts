import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsSpeakerIcon],svg[bx-bxs-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="15" r="3" fill="currentColor"></svg:circle><svg:path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 2a2 2 0 1 1-2 2a2 2 0 0 1 2-2zm0 16a5 5 0 1 1 5-5a5 5 0 0 1-5 5z" fill="currentColor"></svg:path>`,
})
export class BxBxsSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
