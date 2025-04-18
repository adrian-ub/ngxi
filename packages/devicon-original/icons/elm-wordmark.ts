import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalElmWordmarkIcon],svg[devicon-original-elm-wordmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#efa500" d="m27.29 62.59l11.15-11.15h-22.3l11.15 11.15z"></svg:path><svg:path fill="#8dd737" d="m2.92 38.21l11.22 11.23h24.41L27.32 38.21H2.92zm25.784 25.785l12.204-12.204l12.149 12.148l-12.205 12.204z"></svg:path><svg:path fill="#60b5cc" d="M53.08 61.14V38.21H30.15l22.93 22.93z"></svg:path><svg:path fill="#34495e" d="M25.87 64L1.5 39.63v48.74L25.87 64z"></svg:path><svg:path fill="#efa500" d="m42.27 77.56l10.81 10.81V66.75L42.27 77.56z"></svg:path><svg:path fill="#60b5cc" d="M27.29 65.42L2.92 89.79h48.74L27.29 65.42z"></svg:path><svg:path fill="#34495e" d="M62.74 50.22h16.7v3.09h-13v9.1h11v3.14h-11v10.52h13.44v3.13H62.74zm22.84-2.48h3.62v27.4c0 1.15.49 1.59 1 1.59a3.08 3.08 0 0 0 .8-.09l.49 2.74a4.89 4.89 0 0 1-2.08.35c-2.74 0-3.84-1.72-3.84-4.86zm11.27 9.99h3l.31 3.09h.13c1.86-2 4.11-3.62 6.67-3.62c3.27 0 5 1.55 5.92 4.11c2.25-2.43 4.46-4.11 7.07-4.11c4.42 0 6.54 2.92 6.54 8.39V79.2h-3.62V66.08c0-4-1.28-5.74-4-5.74c-1.68 0-3.4 1.11-5.39 3.31V79.2h-3.62V66.08c0-4-1.28-5.74-4-5.74c-1.59 0-3.4 1.11-5.39 3.31V79.2h-3.62z"></svg:path>`,
})
export class DeviconOriginalElmWordmarkIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
