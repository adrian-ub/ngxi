import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAndroidIcon],svg[picon-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2C2-.5 6-.5 6 2m1 4V3h1v3M2 8V3h4v5H5V6H3v2M0 6V3h1v3"></svg:path>`,
})
export class PiconAndroidIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
