import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLikeADinoIcon],svg[arcticons-like-a-dino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.196 18.172c.459-10.217 19.877-16.964 27.151 2.157c6.566 18.864-16.426 22.457-29.754 17.41C2.71 35.079.033 21.554 15.196 18.17z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.752 29.939s6.322 6.235 13.053 1.163"></svg:path><svg:circle cx="20.639" cy="16.388" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.71" cy="17.604" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsLikeADinoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
