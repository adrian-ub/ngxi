import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdStatsIcon],svg[ion-md-stats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M176 64h64v384h-64z" fill="currentColor"></svg:path><svg:path d="M80 336h64v112H80z" fill="currentColor"></svg:path><svg:path d="M272 272h64v176h-64z" fill="currentColor"></svg:path><svg:path d="M368 176h64v272h-64z" fill="currentColor"></svg:path>`,
})
export class IonMdStatsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
