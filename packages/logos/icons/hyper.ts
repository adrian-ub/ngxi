import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosHyperIcon],svg[logos-hyper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosHyper0" x1="47.952%" x2="47.952%" y1="97.595%" y2="0%"><svg:stop offset="0%" stop-color="#FFB300"></svg:stop><svg:stop offset="61.372%" stop-color="#DC3939"></svg:stop><svg:stop offset="100%" stop-color="#FF1BB4"></svg:stop></svg:lineargradient></svg:defs><svg:path d="M13.18 4.5h229.64c4.517 0 8.18 3.655 8.18 8.163v197.674c0 4.508-3.663 8.163-8.18 8.163H13.18c-4.517 0-8.18-3.655-8.18-8.163V12.663C5 8.155 8.663 4.5 13.18 4.5"></svg:path><svg:path fill="url(#logosHyper0)" d="M7.175 14.35v194.583a7.18 7.18 0 0 0 7.178 7.175h227.294a7.175 7.175 0 0 0 7.178-7.175V14.35a7.18 7.18 0 0 0-7.178-7.175H14.353a7.175 7.175 0 0 0-7.178 7.175M0 14.35C0 6.425 6.424 0 14.353 0h227.294C249.574 0 256 6.427 256 14.35v194.583c0 7.925-6.424 14.35-14.353 14.35H14.353C6.426 223.283 0 216.856 0 208.933z"></svg:path><svg:path fill="#FFF" d="M76.15 83.31h38.486v7.473H76.149zM64.406 63.947L30.52 94.393l10.547-26.645l-14.887-10.04l33.885-30.443l-11.47 28.345z"></svg:path>`,
})
export class LogosHyperIcon {
  readonly viewBox = input("0 0 256 224")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
