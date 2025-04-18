import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleThinIcon],svg[ph-hourglass-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m133.78 128l74.68-71.51A12 12 0 0 0 200 36H56a12 12 0 0 0-8.49 20.49l.07.06L122.22 128l-74.61 71.45l-.07.06A12 12 0 0 0 56 220h144a12 12 0 0 0 8.42-20.55ZM52.33 46.47A3.93 3.93 0 0 1 56 44h144a4 4 0 0 1 2.89 6.77L128 122.46L53.17 50.8a3.92 3.92 0 0 1-.84-4.33m151.34 163.06A3.93 3.93 0 0 1 200 212H56a4 4 0 0 1-2.86-6.8L128 133.54l74.8 71.63a3.93 3.93 0 0 1 .87 4.36"></svg:path>`,
})
export class PhHourglassSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
