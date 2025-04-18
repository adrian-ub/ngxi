import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenVoicemailStroke16Icon],svg[garden-voicemail-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="3.5" cy="7.5" r="3"></svg:circle><svg:circle cx="12.5" cy="7.5" r="3"></svg:circle><svg:path d="M3.5 10.5h9"></svg:path></svg:g>`,
})
export class GardenVoicemailStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
