import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosGrapeIcon],svg[logos-grape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient x1="5.177%" y1="21.825%" x2="94.272%" y2="78.175%" id="ssvg-id-grapeb"><svg:stop stop-color="#6C8A55" offset="0%"></svg:stop><svg:stop stop-color="#5E7A44" offset="100%"></svg:stop></svg:lineargradient><svg:lineargradient x1="100%" y1="73.958%" x2="0%" y2="23.824%" id="ssvg-id-graped"><svg:stop stop-color="#90C567" offset="0%"></svg:stop><svg:stop stop-color="#A2CE7F" offset="58.976%"></svg:stop><svg:stop stop-color="#98C871" offset="100%"></svg:stop></svg:lineargradient><svg:radialgradient cx="71.139%" cy="30.656%" fx="71.139%" fy="30.656%" r="62.855%" id="ssvg-id-grapea"><svg:stop stop-color="#8D5391" offset="0%"></svg:stop><svg:stop stop-color="#56185B" offset="100%"></svg:stop><svg:stop stop-color="#55175A" offset="100%"></svg:stop></svg:radialgradient><svg:filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="ssvg-id-grapec"><svg:feoffset dx="4" dy="6" in="SourceAlpha" result="shadowOffsetOuter1"></svg:feoffset><svg:fegaussianblur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></svg:fegaussianblur><svg:fecolormatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"></svg:fecolormatrix><svg:femerge><svg:femergenode in="shadowMatrixOuter1"></svg:femergenode><svg:femergenode in="SourceGraphic"></svg:femergenode></svg:femerge></svg:filter></svg:defs><svg:path d="M256 128c0 70.692-57.308 128-128 128C57.308 256 0 198.692 0 128C0 57.308 57.308 0 128 0c70.692 0 128 57.308 128 128" fill="url(#ssvg-id-grapea)"></svg:path><svg:path d="M127.002.008c57.887-.083 129.081 58.303 101.801 145.965c-64.54-13.14-113.611-69.697-101.801-145.965" fill="url(#ssvg-id-grapeb)" filter="url(#ssvg-id-grapec)"></svg:path><svg:path d="M146.493 2.096c51.495 9.764 97.905 61.413 86.864 124.41c-52.086-9.289-97.302-57.563-86.864-124.41" fill="url(#ssvg-id-graped)"></svg:path>`,
})
export class LogosGrapeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
