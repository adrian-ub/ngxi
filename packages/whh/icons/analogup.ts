import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAnalogupIcon],svg[whh-analogup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024q-91 0-174-35.5T131 893T35.5 750T0 576q0-126 65-232t173-163l-31 50q-10 13-10.5 34t11 38t31.5 17l418-1q21 0 32-17t10.5-38t-10.5-33l-30-50q108 58 172.5 163.5T896 576q0 91-35.5 174T765 893t-143 95.5t-174 35.5M297 256q-9-13-9-30.5t9-30.5L427 13q9-13 21.5-13T470 13l129 182q9 12 9 30t-9 31z"></svg:path>`,
})
export class WhhAnalogupIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
