import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconMinitabIcon],svg[devicon-minitab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8DC63F" d="M0 0h128v128H0z"></svg:path><svg:lineargradient id="deviconMinitab0" x1="99.32" x2="21.21" y1="-254.43" y2="-332.79" gradientTransform="translate(0 374)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#8DC63F" stop-opacity=".2"></svg:stop><svg:stop offset="1" stop-opacity=".2"></svg:stop></svg:lineargradient><svg:path fill="url(#deviconMinitab0)" d="m41 128l-26.2-21.7l19.8-53.9l19.2 17.9V19.4h7.9l21 23.5l6.1-5.3L113.9 70l2.1-1.5l12 16.1v43.2z"></svg:path><svg:path fill="#FFF" d="M42 19.4h19.7v86.9H42zm27.1 18.2h19.7v68.7H69.1zm27.2 30.9H116v37.8H96.3zM14.8 52.4h19.7v53.9H14.8z"></svg:path><svg:path fill="#D1D1D2" d="m14.8 100.3l19.8-7.4v13.4H14.8zm46.9-28.4v34.4H42V89.1zm7.4 0l19.7 14.5v19.9H69.1zm27.2 14.3l19.7-7.6v27.7H96.3z"></svg:path>`,
})
export class DeviconMinitabIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
