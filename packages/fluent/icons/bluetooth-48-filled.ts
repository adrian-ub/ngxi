import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBluetooth48FilledIcon],svg[fluent-bluetooth-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.89 4.13a1.5 1.5 0 0 1 1.613.255l10 9a1.5 1.5 0 0 1 .03 2.203L25.678 24l8.855 8.413a1.5 1.5 0 0 1-.03 2.202l-10 9A1.5 1.5 0 0 1 22 42.5V27.494l-7.467 7.093a1.5 1.5 0 1 1-2.066-2.175L21.322 24l-8.855-8.412a1.5 1.5 0 1 1 2.066-2.175L22 20.505V5.5a1.5 1.5 0 0 1 .89-1.37M25 27.494v11.638l6.29-5.662zm0-6.988l6.29-5.976L25 8.868z"></svg:path>`,
})
export class FluentBluetooth48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
