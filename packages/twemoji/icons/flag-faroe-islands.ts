import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagFaroeIslandsIcon],svg[twemoji-flag-faroe-islands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M9.444 5H4a4 4 0 0 0-4 4v5.5h9.444zM36 14.5V9a4 4 0 0 0-4-4H16.5v9.5z"></svg:path><svg:path fill="#0065BD" d="M36 16v-1.5H16.5V5H15v11zM11 5H9.444v9.5H0V16h11z"></svg:path><svg:path fill="#EEE" d="M0 21.5V27a4 4 0 0 0 4 4h5.444v-9.5zm16.5 0V31H32a4 4 0 0 0 4-4v-5.5z"></svg:path><svg:path fill="#ED2939" d="M15 16V5h-4v11H0v4h11v11h4V20h21v-4z"></svg:path><svg:path fill="#0065BD" d="M15 20v11h1.5v-9.5H36V20zm-4 0H0v1.5h9.444V31H11z"></svg:path>`,
})
export class TwemojiFlagFaroeIslandsIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
