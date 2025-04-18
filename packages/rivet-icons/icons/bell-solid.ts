import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsBellSolidIcon],svg[rivet-icons-bell-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 14v-2h1.382l.366-.733c.175-.349.276-.73.298-1.12l.234-4.209A5.23 5.23 0 0 1 7 1.096V0h2v1.096a5.23 5.23 0 0 1 4.22 4.842l.234 4.209c.022.39.123.771.298 1.12l.366.733H15.5v2H10a2 2 0 1 1-4 0z"></svg:path>`,
})
export class RivetIconsBellSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
