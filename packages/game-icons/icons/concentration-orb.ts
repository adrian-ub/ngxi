import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsConcentrationOrbIcon],svg[game-icons-concentration-orb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.5 17.75c-125.028 2.135-223.03 231.994-9.188 461.625c-197.34-240.608 9.41-548.496 174.157-289.03C287.353 66.332 222.42 16.744 163.5 17.75m201.78 4.656c197.34 240.608-9.41 548.528-174.155 289.063C319.482 698.622 679.9 360.254 365.28 22.405zm-98.31 155.75c-42.422 0-76.814 34.392-76.814 76.813s34.392 76.81 76.813 76.81s76.81-34.39 76.81-76.81c0-42.422-34.39-76.814-76.81-76.814z"></svg:path>`,
})
export class GameIconsConcentrationOrbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
