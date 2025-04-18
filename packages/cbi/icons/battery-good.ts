import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiBatteryGoodIcon],svg[cbi-battery-good-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.926 9.336h.001A1.07 1.07 0 0 1 22 10.409v3.085a1.07 1.07 0 0 1-1.073 1.073h-.001a1.07 1.07 0 0 1-1.073-1.073v-3.085a1.07 1.07 0 0 1 1.073-1.073m-4.498 7.817H4.806A2.81 2.81 0 0 1 2 14.347V9.652a2.81 2.81 0 0 1 2.806-2.8h11.622a2.81 2.81 0 0 1 2.806 2.8v4.7a2.81 2.81 0 0 1-2.806 2.801M4.806 7.736A1.92 1.92 0 0 0 2.89 9.652v4.7a1.92 1.92 0 0 0 1.916 1.917h11.622a1.92 1.92 0 0 0 1.916-1.917v-4.7a1.92 1.92 0 0 0-1.916-1.916Zm.461.674h9.003c.996 0 1.798.802 1.798 1.798v3.487c0 .996-.802 1.798-1.798 1.798H5.267a1.794 1.794 0 0 1-1.798-1.798v-3.487c0-.996.802-1.798 1.798-1.798" class="cls-1"></svg:path>`,
})
export class CbiBatteryGoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
