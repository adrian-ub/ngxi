import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopLineSlantUpCircleIcon],svg[pepicons-pop-line-slant-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.808 22.193a1 1 0 0 1 0-1.415l16.97-16.97a1 1 0 1 1 1.414 1.414l-16.97 16.97a1 1 0 0 1-1.414 0"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopLineSlantUpCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
