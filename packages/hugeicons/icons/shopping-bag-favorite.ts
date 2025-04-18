import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBagFavoriteIcon],svg[hugeicons-shopping-bag-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 21.998c-3.368.04-6.828-.434-8.207-1.388a4.35 4.35 0 0 1-1.589-1.998c-.508-1.31-.022-2.998.95-6.375C4.235 8.488 5.746 7.5 9.65 7.5h3.78c3.557 0 5.073.87 6.07 3.5"></svg:path><svg:path d="M7 8V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V8m-1.858 6.442c1.207-.731 2.26-.437 2.893.033c.259.192.389.288.465.288s.206-.096.465-.288c.633-.47 1.686-.764 2.893-.033c1.584.96 1.942 4.125-1.71 6.795c-.697.509-1.044.763-1.648.763s-.951-.254-1.647-.763c-3.653-2.67-3.295-5.836-1.711-6.795M10.5 11h2"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBagFavoriteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
