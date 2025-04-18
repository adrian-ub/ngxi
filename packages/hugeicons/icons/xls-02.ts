import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXls02Icon],svg[hugeicons-xls-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 13l1.708 2.5m0 0l1.708 2.5m-1.708-2.5l1.708-2.5m-1.708 2.5L8 18m8.562 0h-.854c-.805 0-1.208 0-1.458-.244s-.25-.637-.25-1.423V13m6.728 0h-.949c-.38 0-.569 0-.719.063c-.502.214-.502.71-.502 1.169v.036c0 .458 0 .955.502 1.169c.15.063.34.063.719.063c.38 0 .569 0 .718.063c.503.214.503.71.503 1.169v.036c0 .458 0 .955-.503 1.169c-.15.063-.339.063-.718.063h-1.034"></svg:path><svg:path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsXls02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
