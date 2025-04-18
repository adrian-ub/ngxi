import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTeaBagLightIcon],svg[ph-tea-bag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 162a18 18 0 0 1-18-18V64a54 54 0 0 0-108 0v10H76.53a14.07 14.07 0 0 0-12 6.8L44 115a14 14 0 0 0-2 7.21V216a14 14 0 0 0 14 14h96a14 14 0 0 0 14-14v-93.78a14 14 0 0 0-2-7.21L143.48 80.8a14.07 14.07 0 0 0-12-6.8H110V64a42 42 0 0 1 84 0v80a30 30 0 0 0 30 30a6 6 0 0 0 0-12m-92.53-76a2 2 0 0 1 1.72 1l20.53 34.22a2 2 0 0 1 .28 1V216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-93.78a2 2 0 0 1 .29-1L74.81 87a2 2 0 0 1 1.72-1H98v50a6 6 0 0 0 12 0V86Z"></svg:path>`,
})
export class PhTeaBagLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
