import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceEscalatorIcon],svg[guidance-escalator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 22.5h5.03a8 8 0 0 0 6.813-3.807L18 9.5h5.5v-8h-5.03a8 8 0 0 0-6.813 3.807L6 14.5H.5z"></svg:path>`,
})
export class GuidanceEscalatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
