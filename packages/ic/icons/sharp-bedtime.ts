import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBedtimeIcon],svg[ic-sharp-bedtime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10c3.71 0 6.93-2.02 8.66-5.02c-7.51-.25-12.09-8.43-8.32-14.96"></svg:path>`,
})
export class IcSharpBedtimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
