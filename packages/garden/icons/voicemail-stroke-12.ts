import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenVoicemailStroke12Icon],svg[garden-voicemail-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="2.5" cy="5.5" r="2"></svg:circle><svg:circle cx="9.5" cy="5.5" r="2"></svg:circle><svg:path d="M2.5 7.5h7"></svg:path></svg:g>`,
})
export class GardenVoicemailStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
