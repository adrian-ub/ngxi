import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTt1x1Icon],svg[flag-tt-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h512v512H0z"></svg:path><svg:g fill-rule="evenodd"><svg:path fill="#e00000" d="M371 512L0 1v510.7zM141 0l371 511V.2z"></svg:path><svg:path fill="#000001" d="M22.2.2h94.9l374.5 511.3h-97.9z"></svg:path></svg:g>`,
})
export class FlagTt1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
