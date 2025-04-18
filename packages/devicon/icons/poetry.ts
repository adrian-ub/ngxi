import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPoetryIcon],svg[devicon-poetry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:radialgradient id="deviconPoetry0" cx="438.3" cy="639.01" r="569.94" fx="438.3" fy="639.01" gradientTransform="translate(4.213 5.333)scale(.21333)"><svg:stop offset="0" stop-color="#6877ec"></svg:stop><svg:stop offset=".6" stop-color="#5362cf"></svg:stop><svg:stop offset="1" stop-color="#4352b9"></svg:stop></svg:radialgradient><svg:radialgradient id="deviconPoetry1" cx="65.64" cy="-16.21" r="746.46" fx="65.64" fy="-16.21" gradientTransform="translate(4.213 5.333)scale(.21333)"><svg:stop offset="0" stop-color="#00d5ff"></svg:stop><svg:stop offset=".38" stop-color="#00b8eb"></svg:stop><svg:stop offset="1" stop-color="#0080c5"></svg:stop></svg:radialgradient><svg:radialgradient id="deviconPoetry2" cx="259.68" cy="-34.71" r="431.37" fx="259.68" fy="-34.71" gradientTransform="translate(4.213 5.333)scale(.21333)"><svg:stop offset="0" stop-color="#fff"></svg:stop><svg:stop offset="1"></svg:stop></svg:radialgradient><svg:lineargradient id="deviconPoetry3" x1="74.77" x2="277.23" y1="67.3" y2="512.72" gradientTransform="translate(4.213 5.333)scale(.21333)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#294ca7"></svg:stop><svg:stop offset=".48" stop-color="#96a7d4"></svg:stop><svg:stop offset=".84" stop-color="#e1e6f3"></svg:stop><svg:stop offset="1" stop-color="#fff"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconPoetry4" x1="-228.74" x2="451" y1="-144.29" y2="651.89" gradientTransform="translate(4.213 5.333)scale(.21333)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#6877ec"></svg:stop><svg:stop offset=".29" stop-color="#97a1f2"></svg:stop><svg:stop offset=".77" stop-color="#e2e4fb"></svg:stop><svg:stop offset="1" stop-color="#fff"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconPoetry5" x1="-151.22" x2="450.08" y1="-285.9" y2="430.63" gradientTransform="translate(4.213 5.333)scale(.21333)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#8397cc"></svg:stop><svg:stop offset=".15" stop-color="#97a8d4"></svg:stop><svg:stop offset=".73" stop-color="#e2e6f3"></svg:stop><svg:stop offset="1" stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconPoetry0)" d="M40.07 124.8a121.7 121.7 0 0 0 62.242-33.366L16.216 5.332v95.61Zm0 0"></svg:path><svg:path fill="url(#deviconPoetry1)" d="M16.215 100.941c52.805 0 95.61-42.804 95.61-95.609h-95.61Zm0 0"></svg:path><svg:path fill="url(#deviconPoetry3)" d="m16.215 100.941l3.68 3.68c25.933-.95 49.363-11.875 66.558-29.062l-2.621-2.618a95.3 95.3 0 0 1-67.617 28m0 0"></svg:path><svg:path fill="url(#deviconPoetry4)" d="M40.07 124.8a121.7 121.7 0 0 0 62.242-33.366L16.216 5.332v95.61Zm0 0"></svg:path><svg:path fill="url(#deviconPoetry5)" d="M102.313 91.434L16.215 5.332l78.27 93.254a122 122 0 0 0 7.828-7.152m0 0"></svg:path><svg:path fill="url(#deviconPoetry2)" d="m16.215 5.332l67.605 67.61a99 99 0 0 0 1.782-1.837Zm0 0"></svg:path>`,
})
export class DeviconPoetryIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
