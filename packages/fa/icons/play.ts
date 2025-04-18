import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faPlayIcon],svg[fa-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1384 831L56 1569q-23 13-39.5 3T0 1536V64q0-26 16.5-36T56 31l1328 738q23 13 23 31t-23 31"></svg:path>`,
})
export class FaPlayIcon {
  readonly viewBox = input("0 0 1408 1600")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
