import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiElevatorIcon],svg[maki-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M7.5 12.5l-2-4h4Zm-2-6l2-4l2 4Z"></svg:path>`,
})
export class MakiElevatorIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
