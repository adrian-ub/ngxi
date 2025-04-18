import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconElmIcon],svg[devicon-elm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#efa500" d="m64 60.74l25.65-25.65h-51.3z"></svg:path><svg:path fill="#8dd737" d="m7.91 4.65l25.83 25.84h56.17L64.07 4.65zm59.353 59.343l28.08-28.08l27.951 27.953l-28.08 28.079z"></svg:path><svg:path fill="#60b5cc" d="M123.35 57.42V4.65H70.58z"></svg:path><svg:path fill="#34495e" d="M60.74 64L4.65 7.91V120.1z"></svg:path><svg:path fill="#efa500" d="m98.47 95.21l24.88 24.89V70.33z"></svg:path><svg:path fill="#60b5cc" d="M64 67.26L7.91 123.35h112.18z"></svg:path>`,
})
export class DeviconElmIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
