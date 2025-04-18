import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCarTaxi1Icon],svg[streamline-car-taxi-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2 11h-.5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1H3l.77-2.32a1 1 0 0 1 1-.68h4.01a1 1 0 0 1 1 .68L10.5 7h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H12"></svg:path><svg:path d="M10.499 12.5a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m-7 0a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002M8.998 11H5m2-7V2"></svg:path></svg:g>`,
})
export class StreamlineCarTaxi1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
