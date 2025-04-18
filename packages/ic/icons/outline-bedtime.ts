import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineBedtimeIcon],svg[ic-outline-bedtime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.27 4.49c-1.63 7.54 3.75 12.41 7.66 13.8A8 8 0 0 1 12 20c-4.41 0-8-3.59-8-8c0-3.45 2.2-6.4 5.27-7.51m2.72-2.48C6.4 2.01 2 6.54 2 12c0 5.52 4.48 10 10 10c3.71 0 6.93-2.02 8.66-5.02c-7.51-.25-12.09-8.43-8.32-14.97z"></svg:path>`,
})
export class IcOutlineBedtimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
