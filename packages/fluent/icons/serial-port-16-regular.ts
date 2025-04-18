import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSerialPort16RegularIcon],svg[fluent-serial-port-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m1.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M8 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M7 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M11 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M3.022 5a2 2 0 0 0-1.944 2.47l.725 3A2 2 0 0 0 3.747 12h8.519a2 2 0 0 0 1.944-1.53l.726-3A2 2 0 0 0 12.992 5zM2.05 7.235A1 1 0 0 1 3.022 6h9.97a1 1 0 0 1 .972 1.235l-.726 3a1 1 0 0 1-.972.765h-8.52a1 1 0 0 1-.971-.765z"></svg:path>`,
})
export class FluentSerialPort16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
