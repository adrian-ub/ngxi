import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosGooglePlusIcon],svg[logos-google-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="ssvg-id-google-plusa"><svg:feoffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></svg:feoffset><svg:fegaussianblur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></svg:fegaussianblur><svg:fecolormatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.168 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"></svg:fecolormatrix><svg:feoffset in="SourceAlpha" result="shadowOffsetOuter2"></svg:feoffset><svg:fegaussianblur stdDeviation="1" in="shadowOffsetOuter2" result="shadowBlurOuter2"></svg:fegaussianblur><svg:fecolormatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.084 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"></svg:fecolormatrix><svg:femerge><svg:femergenode in="shadowMatrixOuter1"></svg:femergenode><svg:femergenode in="shadowMatrixOuter2"></svg:femergenode><svg:femergenode in="SourceGraphic"></svg:femergenode></svg:femerge></svg:filter></svg:defs><svg:g fill="none" transform="translate(2 2)"><svg:rect fill="#DC4E41" filter="url(#ssvg-id-google-plusa)" width="252" height="252" rx="7"></svg:rect><svg:path d="M100.8 119.7v15.12h25.011c-1.008 6.489-7.56 19.026-25.011 19.026c-15.057 0-27.342-12.474-27.342-27.846S85.743 98.154 100.8 98.154c8.568 0 14.301 3.654 17.577 6.804l11.97-11.529C122.661 86.247 112.707 81.9 100.8 81.9c-24.381 0-44.1 19.719-44.1 44.1s19.719 44.1 44.1 44.1c25.452 0 42.336-17.892 42.336-43.092c0-2.898-.315-5.103-.693-7.308H100.8z" fill="#FFF"></svg:path><svg:path d="M100.8 120.456h41.643c.441 2.079.693 4.284.693 6.93v-.441c0-2.898-.315-5.103-.693-7.308H100.8v.819zm0-37.8c11.655 0 21.483 4.221 29.043 11.151l.441-.441C122.661 86.247 112.707 81.9 100.8 81.9c-24.381 0-44.1 19.719-44.1 44.1v.378c.252-24.129 19.908-43.722 44.1-43.722zm0 71.946c17.451 0 24.003-12.474 25.011-19.026h-.189c-1.386 6.678-8.001 18.207-24.822 18.207c-14.931 0-27.09-12.285-27.279-27.405c0 .126-.063.252-.063.378c0 15.372 12.285 27.846 27.342 27.846z" opacity=".4" fill="#FFF"></svg:path><svg:path d="M100.8 98.154c-15.057 0-27.342 12.474-27.342 27.846c0 .126.063.252.063.378c.189-15.183 12.348-27.405 27.279-27.405c8.568 0 14.301 3.654 17.577 6.804l11.97-11.529c-.126-.126-.315-.252-.441-.378l-11.529 11.151c-3.276-3.15-9.009-6.867-17.577-6.867zm0 36.666v.756h24.822c.063-.252.126-.567.189-.756H100.8z" opacity=".1" fill="#3E2723"></svg:path><svg:path d="M100.8 170.1c-24.192 0-43.848-19.53-44.1-43.722v.378c0 24.381 19.719 44.1 44.1 44.1c25.452 0 42.336-17.892 42.336-43.092v-.378c-.189 25.011-17.01 42.714-42.336 42.714z" opacity=".1" fill="#3E2723"></svg:path><svg:path d="M195.3 119.7h-12.6v-12.6h-12.6v12.6h-12.6v12.6h12.6v12.6h12.6v-12.6h12.6" fill="#FFF"></svg:path><svg:path d="M182.7 119.7h12.6v.756h-12.6v-.756zm-12.6-12.6h12.6v.756h-12.6v-.756zm-12.6 12.6h12.6v.756h-12.6v-.756z" opacity=".4" fill="#FFF"></svg:path><svg:path d="M157.5 132.3h12.6v.756h-12.6v-.756zm25.2 0h12.6v.756h-12.6v-.756zm-12.6 12.6h12.6v.756h-12.6v-.756z" opacity=".1" fill="#3E2723"></svg:path><svg:path d="M25.2 25.2h201.6v201.6H25.2V25.2z"></svg:path></svg:g>`,
})
export class LogosGooglePlusIcon {
  readonly viewBox = input("0 0 256 258")
  readonly width = input("1em")
  readonly height = input("1em")
}
