import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPunchingBall01Icon],svg[hugeicons-punching-ball-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.002 22c-3.59 0-6.5-2.182-6.5-5.49c0-2.85 2.41-4.863 3.771-8.555c.173-.469.26-.703.326-.825c.355-.654.856-.985 1.642-1.084a6.4 6.4 0 0 1 1.522 0c.786.099 1.287.43 1.642 1.084c.067.122.153.356.326.825c1.361 3.692 3.771 5.706 3.771 8.554c0 3.308-2.91 5.491-6.5 5.491"></svg:path><svg:path d="M9.955 14c-1.023 1.778-.302 8 2.046 8c2.345 0 3.073-6.222 2.048-8M12 6V3.5m0 0l.915-.229A2.43 2.43 0 0 0 14.5 2M12 3.5l-.915-.229A2.43 2.43 0 0 1 9.5 2m5.502 7h-6"></svg:path></svg:g>`,
})
export class HugeiconsPunchingBall01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
