import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBackpackFIcon],svg[jam-backpack-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14a1 1 0 0 0 2 0h3c.729 0 1.412-.195 2-.535V18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4.535c.588.34 1.271.535 2 .535zm2-1v-3a1 1 0 1 0-2 0v3H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3zM5 3H3q-.519.002-1 .126V1.5a1.5 1.5 0 0 1 3 0zm7 .126A4 4 0 0 0 11 3H9V1.5a1.5 1.5 0 0 1 3 0z"></svg:path>`,
})
export class JamBackpackFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
