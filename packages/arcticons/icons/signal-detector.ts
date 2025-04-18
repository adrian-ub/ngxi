import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSignalDetectorIcon],svg[arcticons-signal-detector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 26.585h5.207l2.652-4.146l4.504 10.752l4.709-18.382l6.093 15.825l5.96-10.882l4.744 6.802H43.5"></svg:path>`,
})
export class ArcticonsSignalDetectorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
