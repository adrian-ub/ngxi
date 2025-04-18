import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsClock05Icon],svg[hugeicons-clock-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c4.478 0 8.226 2.943 9.5 7H19"></svg:path><svg:path d="M12 8v4l2 2m7.955-1q.045-.495.045-1m-7 10a10 10 0 0 0 1-.392M20.79 17q.291-.558.515-1.154m-3.113 4.383q.518-.428.977-.922"></svg:path></svg:g>`,
})
export class HugeiconsClock05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
