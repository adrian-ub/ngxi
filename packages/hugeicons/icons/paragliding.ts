import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsParaglidingIcon],svg[hugeicons-paragliding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.759 11.213a2 2 0 0 0-1.518 0L2.004 15c0-.97-.083-1.965.507-2.801c2.045-2.902 5.892-7.002 8.566-8.901a1.58 1.58 0 0 1 1.846 0c2.674 1.899 6.52 6 8.566 8.9c.59.837.507 1.832.507 2.802z"></svg:path><svg:path d="M10.028 12c-.418 1.12-2.754 5.183-1.802 6.289c.723.84 6.644 1.05 7.548 0c.952-1.106-1.384-5.17-1.802-6.289M12 19v2m-4-4l-3.5-3M16 17l3.5-3"></svg:path></svg:g>`,
})
export class HugeiconsParaglidingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
