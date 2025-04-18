import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenVoicemailFill12Icon],svg[garden-voicemail-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="2.8" cy="5.2" r="1.8"></svg:circle><svg:circle cx="9.2" cy="5.2" r="1.8"></svg:circle><svg:path d="M2.5 7h7"></svg:path></svg:g>`,
})
export class GardenVoicemailFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
