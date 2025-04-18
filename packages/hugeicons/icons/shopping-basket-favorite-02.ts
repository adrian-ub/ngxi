import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketFavorite02Icon],svg[hugeicons-shopping-basket-favorite-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 22c-2.333 0-3.42 0-4.232-.725c-.812-.724-1.017-1.949-1.427-4.397L3.178 9.936c-.19-1.13-.284-1.694.007-2.065c.292-.371.83-.371 1.906-.371h13.818c1.076 0 1.614 0 1.906.37c.29.372.196.936.007 2.066L20.56 11.5"></svg:path><svg:path d="M13.142 14.442c1.207-.731 2.26-.437 2.893.033c.259.192.389.288.465.288s.206-.096.465-.288c.633-.47 1.686-.764 2.893-.033c1.584.96 1.942 4.125-1.71 6.795c-.697.509-1.044.763-1.648.763s-.951-.254-1.647-.763c-3.653-2.67-3.295-5.836-1.711-6.795M7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10h5"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBasketFavorite02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
