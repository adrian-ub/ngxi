import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDice2SolidIcon],svg[streamline-dice-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 0A2.5 2.5 0 0 0 0 2.5v9A2.5 2.5 0 0 0 2.5 14h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 11.5 0zm2.912 9.788a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0m4.376-4.376a1.2 1.2 0 1 0 0-2.4a1.2 1.2 0 0 0 0 2.4" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDice2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
