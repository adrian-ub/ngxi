import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSvg02Icon],svg[hugeicons-svg-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m15.758 13l-1.464 3.912c-.27.725-.407 1.088-.621 1.088s-.35-.363-.622-1.088L11.588 13m9.392.833c-.08-.848-.8-.833-1.558-.833c-.745 0-1.117 0-1.348.244c-.23.244-.23.637-.23 1.423v1.666c0 .786 0 1.179.23 1.423c.231.244.603.244 1.348.244c.744 0 1.116 0 1.347-.244s.231-.637.231-1.423c0-.586-1.184-.416-1.184-.416M9.224 13H8.25c-.389 0-.583 0-.736.063c-.522.216-.515.724-.515 1.187s-.007.97.515 1.187c.153.063.347.063.736.063s.583 0 .736.063c.522.216.515.724.515 1.187s.007.97-.515 1.187C8.834 18 8.64 18 8.251 18h-1.06"></svg:path><svg:path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsSvg02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
