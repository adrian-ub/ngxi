import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketSecure02Icon],svg[hugeicons-shopping-basket-secure-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m20.56 11.5l.262-1.564c.19-1.13.284-1.694-.007-2.065c-.292-.371-.83-.371-1.906-.371H5.091c-1.076 0-1.614 0-1.906.37c-.29.372-.196.936-.007 2.066l1.163 6.942c.41 2.448.615 3.672 1.427 4.397S7.667 22 10 22h1"></svg:path><svg:path d="M17 14c-1.267 0-2.088.808-3.06 1.102c-.394.12-.592.18-.672.264s-.103.207-.15.454c-.5 2.638.594 5.078 3.204 6.027c.28.102.42.153.679.153c.257 0 .398-.051.678-.153c2.61-.95 3.704-3.389 3.203-6.027c-.047-.247-.07-.37-.15-.454s-.278-.144-.673-.264C19.088 14.808 18.266 14 17 14M7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10h5"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBasketSecure02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
