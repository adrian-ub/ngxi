import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorRibbonStar20Icon],svg[fluent-color-ribbon-star-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorRibbonStar200)" d="M10 12.755a6.97 6.97 0 0 0 4-1.255v6a.5.5 0 0 1-.79.407L10 16l-3.21 1.907A.5.5 0 0 1 6 17.5v-6a6.97 6.97 0 0 0 4 1.255"></svg:path><svg:path fill="url(#fluentColorRibbonStar201)" d="M16 8A6 6 0 1 1 4 8a6 6 0 0 1 12 0"></svg:path><svg:path fill="url(#fluentColorRibbonStar202)" d="M10.164 5.102a.175.175 0 0 0-.318 0L9.13 6.655a.18.18 0 0 1-.138.1l-1.699.202a.175.175 0 0 0-.098.302L8.451 8.42a.18.18 0 0 1 .053.163L8.17 10.26a.175.175 0 0 0 .257.187l1.493-.835a.18.18 0 0 1 .17 0l1.493.835c.13.073.286-.04.257-.187l-.333-1.677a.18.18 0 0 1 .053-.163l1.255-1.161a.175.175 0 0 0-.098-.302l-1.698-.202a.18.18 0 0 1-.139-.1z"></svg:path><svg:defs><svg:radialgradient id="fluentColorRibbonStar200" cx="0" cy="0" r="1" gradientTransform="matrix(0 10.2442 -17.6591 0 10 10.486)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#163697"></svg:stop><svg:stop offset="1" stop-color="#29C3FF"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorRibbonStar201" cx="0" cy="0" r="1" gradientTransform="rotate(56.615 26.168 -40.357)scale(66.981 57.3661)" gradientUnits="userSpaceOnUse"><svg:stop offset=".772" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorRibbonStar202" cx="0" cy="0" r="1" gradientTransform="matrix(-2.86665 -9.57203 13.81794 -4.13822 11.438 10.47)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B03111"></svg:stop><svg:stop offset="1" stop-color="#E67505"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorRibbonStar20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
