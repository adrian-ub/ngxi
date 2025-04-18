import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDiigoIcon],svg[ps-diigo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 177q27 0 50.5-10.5t36-20.5t31.5-29v345h-57q-1-14-1-42v-97q0-18 .5-54t.5-54q-4 1-14 4.5t-14 4.5q-55 14-95-10v248H14V117q27 29 54 45t66 15m91-100q15 0 26-11t11-27t-11-27t-26-11q-16 0-26.5 11T188 39t10.5 27T225 77M43 77q16 0 26.5-11T80 39T69.5 12T43 1Q28 1 17 12T6 39t11 27t26 11"></svg:path>`,
})
export class PsDiigoIcon {
  readonly viewBox = input("0 0 264 488")
  readonly width = input("0.55em")
  readonly height = input("1em")
}
