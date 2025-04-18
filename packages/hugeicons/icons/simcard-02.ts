import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSimcard02Icon],svg[hugeicons-simcard-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 11.858c0-4.576 0-6.864 1.387-8.314a5 5 0 0 1 .157-.157C5.994 2 8.282 2 12.858 2c1.085 0 1.608.004 2.105.19c.479.178.88.512 1.682 1.181l2.196 1.83c1.062.885 1.592 1.327 1.876 1.932C21 7.737 21 8.428 21 9.81V13c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z"></svg:path><svg:path d="M7 14.5c0 1.65 0 2.475.44 2.987C7.878 18 8.585 18 10 18h4c1.414 0 2.121 0 2.56-.513c.44-.512.44-1.337.44-2.987m-10 0c0-1.65 0-2.475.44-2.987C7.878 11 8.585 11 10 11h4c1.414 0 2.121 0 2.56.513c.44.512.44 1.337.44 2.987m-10 0h2m8 0h-2"></svg:path></svg:g>`,
})
export class HugeiconsSimcard02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
