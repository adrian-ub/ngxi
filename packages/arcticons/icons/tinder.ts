import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTinderIcon],svg[arcticons-tinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.79 4.5C34.16 8.4 40.4 18.38 40.4 27.1a16.4 16.4 0 0 1-32.8 0c0-.43 0-.85.05-1.28c.57-11.15 8.26-14.57 8.26-14.57s.76 4 2.57 6.27c0 0 8-5.42 7.31-13Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.48 17.52a13.44 13.44 0 0 0 4.94 4.25"></svg:path>`,
})
export class ArcticonsTinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
