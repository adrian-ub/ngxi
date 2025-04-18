import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumSpeakerIcon],svg[circum-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.437 21.938H6.562a2.5 2.5 0 0 1-2.5-2.5V4.562a2.5 2.5 0 0 1 2.5-2.5h10.875a2.5 2.5 0 0 1 2.5 2.5v14.876a2.5 2.5 0 0 1-2.5 2.5M6.562 3.062a1.5 1.5 0 0 0-1.5 1.5v14.876a1.5 1.5 0 0 0 1.5 1.5h10.875a1.5 1.5 0 0 0 1.5-1.5V4.562a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path><svg:path fill="currentColor" d="M12 18.939a3.75 3.75 0 1 1 3.75-3.75a3.755 3.755 0 0 1-3.75 3.75m0-6.5a2.75 2.75 0 1 0 2.75 2.75a2.75 2.75 0 0 0-2.75-2.75m0-2.876a2.25 2.25 0 1 1 2.25-2.25A2.253 2.253 0 0 1 12 9.563m0-3.5a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 6.063"></svg:path>`,
})
export class CircumSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
