import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpElevatorIcon],svg[ic-sharp-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM8.5 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m2.5 8h-1v4H7v-4H6V9.5h5zm4.5 3L13 13h5zM13 11l2.5-4l2.5 4z"></svg:path>`,
})
export class IcSharpElevatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
