import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsBootstrapIcon],svg[skill-icons-bootstrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="url(#skillIconsBootstrap0)" rx="60"></svg:rect><svg:g filter="url(#skillIconsBootstrap2)"><svg:path fill="url(#skillIconsBootstrap1)" d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551z"></svg:path><svg:path stroke="#fff" stroke-width="2" d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551z"></svg:path></svg:g><svg:defs><svg:lineargradient id="skillIconsBootstrap0" x1="0" x2="256" y1="0" y2="256" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9013FE"></svg:stop><svg:stop offset="1" stop-color="#6B11F4"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsBootstrap1" x1="85.793" x2="148.541" y1="68.962" y2="175.084" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#F1E5FC"></svg:stop></svg:lineargradient><svg:filter id="skillIconsBootstrap2" width="137.529" height="170.157" x="59" y="47" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy="4"></svg:feoffset><svg:fegaussianblur stdDeviation="8"></svg:fegaussianblur><svg:fecolormatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></svg:fecolormatrix><svg:feblend in2="BackgroundImageFix" result="effect1_dropShadow_158_100"></svg:feblend><svg:feblend in="SourceGraphic" in2="effect1_dropShadow_158_100" result="shape"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class SkillIconsBootstrapIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
