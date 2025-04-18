import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosZodIcon],svg[logos-zod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:filter id="logosZod0" width="105.2%" height="106.5%" x="-2.2%" y="-2.8%" filterUnits="objectBoundingBox"><svg:feoffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></svg:feoffset><svg:fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></svg:fegaussianblur><svg:fecolormatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"></svg:fecolormatrix></svg:filter><svg:path id="logosZod1" fill="#000" d="M200.42 0H53.63L0 53.355l121.76 146.624l9.714-10.9L252 53.857zm-5.362 12.562l39.84 41.6l-112.8 126.558L17 54.162l41.815-41.6z"></svg:path></svg:defs><svg:g transform="translate(2 1.51)"><svg:path fill="#18253F" d="M58.816 12.522h136.278l39.933 41.691l-112.989 126.553L16.957 54.213z"></svg:path><svg:path fill="#274D82" d="M149.427 150.875H96.013l-24.124-29.534l68.364-.002l.002-4.19h39.078z"></svg:path><svg:path fill="#274D82" d="M223.56 42.323L76.178 127.414l-19.226-24.052l114.099-65.877l-2.096-3.631l30.391-17.546zm-78.964-29.759L33.93 76.457L16.719 54.972l74.095-42.779z"></svg:path><svg:use filter="url(#logosZod0)" href="#logosZod1"></svg:use><svg:use fill="#3068B7" href="#logosZod1"></svg:use></svg:g>`,
})
export class LogosZodIcon {
  readonly viewBox = input("0 0 256 203")
  readonly width = input("1.27em")
  readonly height = input("1em")
}
