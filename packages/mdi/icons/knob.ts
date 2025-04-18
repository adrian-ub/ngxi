import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKnobIcon],svg[mdi-knob-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m1 8h-2V4.1c.3-.1.7-.1 1-.1s.7 0 1 .1z"></svg:path>`,
})
export class MdiKnobIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
