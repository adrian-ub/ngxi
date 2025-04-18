import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosGitupIcon],svg[logos-gitup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:filter id="logosGitup0" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><svg:femorphology in="SourceAlpha" operator="dilate" radius="1" result="shadowSpreadOuter1"></svg:femorphology><svg:feoffset dx="1" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></svg:feoffset><svg:fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"></svg:fegaussianblur><svg:fecolormatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"></svg:fecolormatrix><svg:femerge><svg:femergenode in="shadowMatrixOuter1"></svg:femergenode><svg:femergenode in="SourceGraphic"></svg:femergenode></svg:femerge></svg:filter><svg:filter id="logosGitup1" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><svg:femorphology in="SourceAlpha" operator="dilate" radius="1" result="shadowSpreadOuter1"></svg:femorphology><svg:feoffset in="shadowSpreadOuter1" result="shadowOffsetOuter1"></svg:feoffset><svg:fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></svg:fegaussianblur><svg:fecolormatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"></svg:fecolormatrix><svg:femerge><svg:femergenode in="shadowMatrixOuter1"></svg:femergenode><svg:femergenode in="SourceGraphic"></svg:femergenode></svg:femerge></svg:filter><svg:clippath id="logosGitup2"><svg:path d="M19.92 28.011L194.686.331C207.413-1.685 219.365 7 221.38 19.726l27.68 174.765c2.016 12.727-6.667 24.679-19.394 26.695L54.9 248.866c-12.727 2.016-24.678-6.668-26.694-19.395L.526 54.706C-1.49 41.979 7.193 30.027 19.92 28.01"></svg:path></svg:clippath></svg:defs><svg:path fill="#F5F5F5" d="M19.92 28.011L194.686.331C207.413-1.685 219.365 7 221.38 19.726l27.68 174.765c2.016 12.727-6.667 24.679-19.394 26.695L54.9 248.866c-12.727 2.016-24.678-6.668-26.694-19.395L.526 54.706C-1.49 41.979 7.193 30.027 19.92 28.01" filter="url(#logosGitup0)" transform="translate(2.24 2.24)"></svg:path><svg:g clip-path="url(#logosGitup2)" transform="translate(2.24 2.24)"><svg:circle cx="129.582" cy="128.848" r="116.671" fill="#FBFBFB" filter="url(#logosGitup1)"></svg:circle><svg:circle cx="129.582" cy="128.848" r="72.924" fill="#FCFCFC" filter="url(#logosGitup1)"></svg:circle><svg:circle cx="129.582" cy="128.848" r="29.169" fill="#FFF" filter="url(#logosGitup1)"></svg:circle></svg:g><svg:path fill-opacity=".2" d="m22.203 30.519l174.766-27.68c12.58-1.993 24.393 6.59 26.385 19.17l27.68 174.765c1.993 12.58-6.59 24.393-19.17 26.385L57.098 250.84c-12.58 1.993-24.392-6.59-26.385-19.17L3.033 56.905c-1.993-12.58 6.59-24.393 19.17-26.385m-.085-.534C9.244 32.025.46 44.114 2.5 56.988l27.68 174.766c2.039 12.874 14.129 21.658 27.003 19.62l174.766-27.681c12.874-2.04 21.658-14.129 19.619-27.003l-27.68-174.766c-2.04-12.874-14.13-21.658-27.004-19.62z"></svg:path>`,
})
export class LogosGitupIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
