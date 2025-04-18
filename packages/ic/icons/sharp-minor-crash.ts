import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMinorCrashIcon],svg[ic-sharp-minor-crash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.57 8H5.43L3 15v9h3v-2h12v2h3v-9zM6.85 10h10.29l1.04 3H5.81zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19S6 18.33 6 17.5m9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5M9.41 5L8 6.41l-3-3L6.41 2zM16 6.41L14.59 5l3-3L19 3.41zM13 5h-2V0h2z"></svg:path>`,
})
export class IcSharpMinorCrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
