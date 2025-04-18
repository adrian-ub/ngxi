import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAtomicIconIcon],svg[logos-atomic-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1E6EFA" d="M177.68 230.745H34.967C15.655 230.745 0 215.089 0 195.778c0-19.315 15.653-34.976 34.967-34.986l80.866-.04a37.19 37.19 0 0 1 32.238 18.617z"></svg:path><svg:path fill="#FF3C5A" d="M26.491 141.083L97.848 17.489C107.504.765 128.889-4.965 145.614 4.691c16.727 9.657 22.463 31.043 12.815 47.775l-40.399 70.052a37.19 37.19 0 0 1-32.242 18.61z"></svg:path><svg:path fill="#FFC5CE" d="m179.954 54.98l71.357 123.594c9.657 16.725 3.926 38.11-12.799 47.767s-38.116 3.931-47.78-12.79l-40.47-70.012a37.19 37.19 0 0 1 .005-37.228z"></svg:path>`,
})
export class LogosAtomicIconIcon {
  readonly viewBox = input("0 0 256 232")
  readonly width = input("1.11em")
  readonly height = input("1em")
}
