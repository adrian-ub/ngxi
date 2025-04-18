import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiCeilingLampRoundIcon],svg[cbi-ceiling-lamp-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.5v1a3 1.5 0 0 0 1.5 1.299a3 1.5 0 0 0 .5.113v3.824a11 7.15 0 0 1 1-.037a11 7.15 0 0 1 1 .033v-3.82a3 1.5 0 0 0 .5-.113A3 1.5 0 0 0 15 3.5v-1zm3 7.2a10 6.15 0 0 0-10 6.15A10 6.15 0 0 0 12 22a10 6.15 0 0 0 10-6.15A10 6.15 0 0 0 12 9.7"></svg:path>`,
})
export class CbiCeilingLampRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
