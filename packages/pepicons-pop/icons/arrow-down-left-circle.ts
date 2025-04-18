import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowDownLeftCircleIcon],svg[pepicons-pop-arrow-down-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.646 17.098a1 1 0 0 1-1.087.905l-5.185-.472a1 1 0 1 1 .181-1.991l5.186.471a1 1 0 0 1 .905 1.087"></svg:path><svg:path d="M8.903 10.354a1 1 0 0 1 1.086.906l.471 5.185a1 1 0 1 1-1.991.181l-.472-5.185a1 1 0 0 1 .906-1.087"></svg:path><svg:path d="M10.172 15.829a1 1 0 0 1 0-1.415l5.656-5.656a1 1 0 1 1 1.415 1.414l-5.657 5.657a1 1 0 0 1-1.414 0"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopArrowDownLeftCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
