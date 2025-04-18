import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsClock03Icon],svg[hugeicons-clock-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18.952 8.607l2.51-.153C19.662 3.704 14.497 1 9.46 2.344C4.096 3.778.91 9.262 2.343 14.595s6.945 8.494 12.31 7.061A10.04 10.04 0 0 0 22 13.485"></svg:path><svg:path d="M12 8v4l2 2"></svg:path></svg:g>`,
})
export class HugeiconsClock03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
