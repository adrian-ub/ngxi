import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLandingIcon],svg[icon-park-outline-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 43h38M4 25V14.99c1.216 0 4.818 4.179 6 6.01l11 2V5l4 2l5.831 18.978L40 28c4 1 4 3.5 4 4c0 3-3.5 3-4 3c-4 0-36-10-36-10"></svg:path>`,
})
export class IconParkOutlineLandingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
