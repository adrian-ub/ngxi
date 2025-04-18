import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPillarNyroIcon],svg[cbi-pillar-nyro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.875 3v18.25l1 .75l7.75-2.5v-15l-6.5 1l-1-.25v-1l1 .25l8-1v-1l-2.5-.5Z"></svg:path>`,
})
export class CbiPillarNyroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
