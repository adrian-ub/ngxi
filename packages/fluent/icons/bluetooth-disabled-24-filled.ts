import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBluetoothDisabled24FilledIcon],svg[fluent-bluetooth-disabled-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.677 17.738l4.042 4.043a.75.75 0 0 0 1.061-1.061L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.48 8.48l-4.325 3.46a1 1 0 1 0 1.25 1.56L11 14.08V21a1 1 0 0 0 1.707.707zm-3.578-3.578l2.163 2.163L13 18.586V14.08zm4.526-5.38l-3.146 2.517l-1.423-1.423l2.447-1.957L13 5.414v4.404l-2-2V3a1 1 0 0 1 1.707-.707l5 5a1 1 0 0 1-.082 1.488"></svg:path>`,
})
export class FluentBluetoothDisabled24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
