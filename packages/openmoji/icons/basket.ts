import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBasketIcon],svg[openmoji-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#a57939"><svg:path d="m36 35.129l-18.787-.045L22.09 58.34h27.82l4.877-23.256z"></svg:path><svg:path d="M15.092 27.478v7.672h41.516l.749-7.672z"></svg:path><svg:path d="m31.675 32.298l-9.19-14.738c-1.116-1.79-.83-3.983.638-4.898c1.468-.916 3.563-.207 4.68 1.582l11.133 18.054Z"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m36 35.129l-18.787-.045L22.09 58.34h27.82l4.877-23.256zm-4.325-2.831l-9.19-14.738c-1.116-1.79-.83-3.983.638-4.898h0c1.468-.916 3.563-.207 4.68 1.582l11.133 18.054Zm7.501 5.494l8.713 9.578m-18.974-9.72l15.82 17.614m-20.89-13.762L36.383 55.7m-11.1-1.601l1.384 1.378m-2.103-9.012l8.011-8.673m-5.699 17.56l16.518-17.56M36.383 55.7l12.062-12.484m-3.71 12.048l2.161-1.822"></svg:path><svg:circle cx="33.874" cy="29.837" r=".886"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36.383 27.427h20.974v7.665H14.643v-7.665h13.206"></svg:path>`,
})
export class OpenmojiBasketIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
