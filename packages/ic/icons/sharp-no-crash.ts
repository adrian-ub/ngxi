import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNoCrashIcon],svg[ic-sharp-no-crash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.57 8H5.43L3 15v9h3v-2h12v2h3v-9zM6.85 10h10.29l1.04 3H5.81zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19S6 18.33 6 17.5m9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5M12 6.36L9.17 3.54l1.41-1.41L12 3.54L15.54 0l1.41 1.41z"></svg:path>`,
})
export class IcSharpNoCrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
