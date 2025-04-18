import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiStraightRulerIcon],svg[fluent-emoji-straight-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f2405id1)"><svg:rect width="31.576" height="10.482" x="8.542" y="1.201" fill="url(#f2405id0)" rx="2.25" transform="rotate(45 8.542 1.2)"></svg:rect></svg:g><svg:path fill="#9D73E8" d="M11.117 3.776L9.172 5.72a.544.544 0 0 1-.77-.77l1.945-1.945zm1.492 1.491l.77.77l-1.112 1.11a.544.544 0 1 1-.77-.769zm2.216 2.217l.77.77l-1.875 1.875a.545.545 0 0 1-.77-.77zm2.281 2.28l.77.77l-1.15 1.15a.544.544 0 0 1-.77-.77zm2.248 2.249l.77.77l-1.87 1.868a.544.544 0 1 1-.769-.77zm2.268 2.267l.77.77l-1.143 1.143a.544.544 0 1 1-.77-.77zm2.212 2.212l.77.77l-1.9 1.9a.544.544 0 0 1-.77-.77zm2.253 2.253l.77.77l-1.162 1.162a.544.544 0 1 1-.77-.77zm2.273 2.274l.77.77l-1.881 1.88a.544.544 0 0 1-.77-.77z"></svg:path><svg:defs><svg:lineargradient id="f2405id0" x1="24.33" x2="24.33" y1="1.201" y2="11.682" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CAC8D1"></svg:stop><svg:stop offset="1" stop-color="#BAB8C0"></svg:stop></svg:lineargradient><svg:filter id="f2405id1" width="28.475" height="28.475" x="1.762" y="1.833" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx=".3" dy="-.3"></svg:feoffset><svg:fegaussianblur stdDeviation=".3"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.611765 0 0 0 0 0.596078 0 0 0 0 0.658824 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18_23242"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-.3" dy=".3"></svg:feoffset><svg:fegaussianblur stdDeviation=".3"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.913725 0 0 0 0 0.909804 0 0 0 0 0.92549 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18_23242" result="effect2_innerShadow_18_23242"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiStraightRulerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
