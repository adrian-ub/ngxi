import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosOrigamiIcon],svg[logos-origami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:radialgradient id="logosOrigami0" cx="26.196%" cy="9.36%" r="105.51%" fx="26.196%" fy="9.36%" gradientTransform="matrix(.52887 .8454 -.8487 .5268 .203 -.177)"><svg:stop offset="0%" stop-color="#51C3F7"></svg:stop><svg:stop offset="100%" stop-color="#046CF4"></svg:stop></svg:radialgradient><svg:radialgradient id="logosOrigami1" cx="-15.313%" cy="-13.633%" r="181.001%" fx="-15.313%" fy="-13.633%" gradientTransform="scale(1 .90955)rotate(15.27 -.103 -.143)"><svg:stop offset="0%" stop-color="#FFF"></svg:stop><svg:stop offset="100%" stop-color="#5CB5FF"></svg:stop></svg:radialgradient><svg:radialgradient id="logosOrigami2" cx="69.551%" cy="-14.976%" r="205.05%" fx="69.551%" fy="-14.976%" gradientTransform="matrix(-.45604 .51346 -.88996 -.26311 .88 -.546)"><svg:stop offset="0%" stop-color="#FFF"></svg:stop><svg:stop offset="100%" stop-color="#7AC2FF"></svg:stop></svg:radialgradient><svg:radialgradient id="logosOrigami3" cx="40.071%" cy="19.981%" r="98.92%" fx="40.071%" fy="19.981%" gradientTransform="matrix(.5143 .57232 -.8576 .34322 .366 -.098)"><svg:stop offset="0%" stop-color="#FFF"></svg:stop><svg:stop offset="100%" stop-color="#CBE7FF"></svg:stop></svg:radialgradient><svg:path id="logosOrigami4" d="M127.755 256c70.416 0 127.5-57.307 127.5-128c0-70.692-57.084-128-127.5-128C57.338 0 .255 57.308.255 128s57.083 128 127.5 128"></svg:path></svg:defs><svg:path fill="url(#logosOrigami0)" d="M127.755 256c70.416 0 127.5-57.307 127.5-128c0-70.692-57.084-128-127.5-128C57.338 0 .255 57.308.255 128s57.083 128 127.5 128"></svg:path><svg:mask id="logosOrigami5" fill="#fff"><svg:use href="#logosOrigami4"></svg:use></svg:mask><svg:path fill="#E8F5FF" d="m136.982 58.764l57.763 61.091l-49.756-11.637z" mask="url(#logosOrigami5)"></svg:path><svg:path fill="#64A4D8" d="m138.379 67.243l14.525 42.993l-8.211-2.018z" mask="url(#logosOrigami5)"></svg:path><svg:path fill="url(#logosOrigami1)" d="M21.364 140.8L-94 13.964L6.172 35.907z" mask="url(#logosOrigami5)"></svg:path><svg:path fill="url(#logosOrigami2)" d="M159.488 196.997L136.503 58.764L79.735 127.88z" mask="url(#logosOrigami5)"></svg:path><svg:path fill="#4492D2" d="m89.116 116.735l34.936 43.464l-37.688-40.054z" mask="url(#logosOrigami5)"></svg:path><svg:path fill="url(#logosOrigami3)" d="m56.725 335.585l-97.279-226.846L4.621 35.491l155.091 161.683z" mask="url(#logosOrigami5)"></svg:path>`,
})
export class LogosOrigamiIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
