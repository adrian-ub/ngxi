import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosBracketsIcon],svg[logos-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:filter id="logosBrackets0" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><svg:feoffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></svg:feoffset><svg:fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></svg:fegaussianblur><svg:fecolormatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.273992301 0"></svg:fecolormatrix><svg:femerge><svg:femergenode in="shadowMatrixOuter1"></svg:femergenode><svg:femergenode in="SourceGraphic"></svg:femergenode></svg:femerge></svg:filter><svg:filter id="logosBrackets1" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><svg:feoffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></svg:feoffset><svg:fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></svg:fegaussianblur><svg:fecolormatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.273992301 0"></svg:fecolormatrix><svg:femerge><svg:femergenode in="shadowMatrixOuter1"></svg:femergenode><svg:femergenode in="SourceGraphic"></svg:femergenode></svg:femerge></svg:filter><svg:lineargradient id="logosBrackets2" x1="50%" x2="50%" y1="0%" y2="100%"><svg:stop offset="0%" stop-color="#29ABE2"></svg:stop><svg:stop offset="47.57%" stop-color="#28A9E1"></svg:stop><svg:stop offset="66.39%" stop-color="#23A2DC"></svg:stop><svg:stop offset="80.12%" stop-color="#1A96D4"></svg:stop><svg:stop offset="91.3%" stop-color="#0E85C9"></svg:stop><svg:stop offset="100%" stop-color="#0071BC"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#115A91" d="M256 204.8c0 28.16-23.04 51.2-51.2 51.2H51.2C23.04 256 0 232.96 0 204.8V51.2C0 23.04 23.04 0 51.2 0h153.6C232.96 0 256 23.04 256 51.2z"></svg:path><svg:path fill="#FFF" d="M204.8 28.16c12.705 0 23.04 10.335 23.04 23.04v128c0 12.705-10.335 23.04-23.04 23.04H51.2c-12.705 0-23.04-10.335-23.04-23.04v-128c0-12.705 10.335-23.04 23.04-23.04z"></svg:path><svg:path fill="url(#logosBrackets2)" d="M204.8 28.16c12.705 0 23.04 10.335 23.04 23.04v128c0 12.705-10.335 23.04-23.04 23.04H51.2c-12.705 0-23.04-10.335-23.04-23.04v-128c0-12.705 10.335-23.04 23.04-23.04zm0-28.16H51.2C23.04 0 0 23.04 0 51.2v128c0 28.16 23.04 51.2 51.2 51.2h153.6c28.16 0 51.2-23.04 51.2-51.2v-128C256 23.04 232.96 0 204.8 0"></svg:path><svg:g fill="#4D4D4D"><svg:path d="M143.36 0v122.88h-64V92.16h35.84v-64H79.36V0z" filter="url(#logosBrackets0)" transform="translate(56.32 53.76)"></svg:path><svg:path d="M64 0v28.16H28.16v64H64v30.72H0V0z" filter="url(#logosBrackets1)" transform="translate(56.32 53.76)"></svg:path></svg:g>`,
})
export class LogosBracketsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
