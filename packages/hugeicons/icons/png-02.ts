import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPng02Icon],svg[hugeicons-png-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2M7 18v-4.5a.5.5 0 0 1 .5-.5h1.198c.501 0 1.015.234 1.165.712c.1.322.096.624-.004.966c-.156.53-.704.822-1.257.822H7.5M12 18l.1-4.63a.1.1 0 0 1 .182-.058l2.943 4.4a.1.1 0 0 0 .182-.058L15.5 13m5.5.873c-.12-.718-.253-.873-1-.873h-1.5c-.552 0-.801.448-.801 1v3c0 .552.249 1 .801 1h1.7a.8.8 0 0 0 .8-.8v-.8a.4.4 0 0 0-.4-.4h-.75"></svg:path></svg:g>`,
})
export class HugeiconsPng02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
