import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketFavorite01Icon],svg[hugeicons-shopping-basket-favorite-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.5 22H9.622c-2.348 0-3.522 0-4.336-.706c-.815-.705-1.014-1.895-1.413-4.275L2.669 9.84c-.182-1.085-.273-1.627.019-1.983c.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356c.292.356.2.898.019 1.984l-.279 1.66"></svg:path><svg:path d="M13.642 14.442c1.207-.731 2.26-.437 2.893.033c.259.192.389.288.465.288s.206-.096.465-.288c.633-.47 1.686-.764 2.893-.033c1.584.96 1.942 4.125-1.71 6.795c-.697.509-1.044.763-1.648.763s-.951-.254-1.647-.763c-3.653-2.67-3.295-5.836-1.711-6.795M17.5 7.5a5.5 5.5 0 1 0-11 0"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBasketFavorite01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
