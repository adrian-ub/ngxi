import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentJoystick20FilledIcon],svg[fluent-joystick-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7.959a3 3 0 1 0-1 0V11h-2A1.5 1.5 0 0 0 6 12.5v.5h8v-.5a1.5 1.5 0 0 0-1.5-1.5h-2zM3 16a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5z"></svg:path>`,
})
export class FluentJoystick20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
