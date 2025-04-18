import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDownArrowCircleIcon],svg[ps-down-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 512q106 0 181-75t75-181t-75-181T256 0T75 75T0 256t75 181t181 75m0-469q88 0 150.5 62.5T469 256t-62.5 150.5T256 469t-150.5-62.5T43 256t62.5-150.5T256 43m-13 315l2 3h22q2 0 2-3l64-42q17-12 6-30q-10-18-30-7l-30 22V171q0-22-21-22t-21 22v130l-30-22q-20-11-30 7q-10 19 6 30z"></svg:path>`,
})
export class PsDownArrowCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
