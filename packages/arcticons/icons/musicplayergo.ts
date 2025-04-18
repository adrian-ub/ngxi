import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicplayergoIcon],svg[arcticons-musicplayergo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.76 17.75v14.66a1 1 0 0 0 1.06 1a1.06 1.06 0 0 0 .57-.17L31.2 26a1 1 0 0 0 .29-1.44a1.3 1.3 0 0 0-.29-.29l-10.8-7.39a1 1 0 0 0-1.64.87"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.87 5.75a19.43 19.43 0 1 0 21.56 19.32"></svg:path><svg:circle cx="24" cy="5.63" r="2.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMusicplayergoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
