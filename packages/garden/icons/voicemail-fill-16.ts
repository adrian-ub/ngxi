import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenVoicemailFill16Icon],svg[garden-voicemail-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="3.5" cy="7.5" r="2.5"></svg:circle><svg:circle cx="12.5" cy="7.5" r="2.5"></svg:circle><svg:path d="M3.5 10h9"></svg:path></svg:g>`,
})
export class GardenVoicemailFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
