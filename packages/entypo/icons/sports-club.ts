import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoSportsClubIcon],svg[entypo-sports-club-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 13.5l4 2.5l4-2.5V5H6zM4.5 10a2 2 0 1 0-4 0a2 2 0 0 0 4 0m13-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4M4.485 6.199A6.71 6.71 0 0 1 10 3.3a6.72 6.72 0 0 1 5.456 2.823a1.4 1.4 0 0 0 2.281-1.624A9.52 9.52 0 0 0 10 .5a9.5 9.5 0 0 0-7.817 4.107a1.4 1.4 0 0 0 .355 1.948a1.4 1.4 0 0 0 1.947-.356m10.971 7.678A6.71 6.71 0 0 1 10 16.7a6.71 6.71 0 0 1-5.515-2.899a1.4 1.4 0 0 0-2.302 1.592A9.5 9.5 0 0 0 10 19.5a9.52 9.52 0 0 0 7.737-3.999a1.401 1.401 0 0 0-2.281-1.624"></svg:path>`,
})
export class EntypoSportsClubIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
