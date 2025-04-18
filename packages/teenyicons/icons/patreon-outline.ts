import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPatreonOutlineIcon],svg[teenyicons-patreon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5.5h-2v14h2zm2 5a5 5 0 1 0 10 0a5 5 0 0 0-10 0Z"></svg:path>`,
})
export class TeenyiconsPatreonOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
