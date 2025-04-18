import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7DecreaseQuotelevelIcon],svg[f7-decrease-quotelevel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.613 7.926V48.05c0 .984.774 1.804 1.782 1.804c.984 0 1.757-.82 1.757-1.804V7.926a1.76 1.76 0 0 0-1.758-1.782a1.766 1.766 0 0 0-1.78 1.782m21.094 27.258c1.688 1.125 3.68.492 3.68-1.594V22.48c0-2.156-1.899-2.835-3.68-1.617l-7.758 5.274c-1.36.937-1.406 2.93 0 3.867Z"></svg:path>`,
})
export class F7DecreaseQuotelevelIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
