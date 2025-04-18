import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiElevatorIcon],svg[mynaui-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.294h4.5a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H12m0-12.706H7.5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2H12m0-12.706V21M7.125 4.588L8.75 3l1.625 1.588M13.625 3l1.625 1.588L16.875 3"></svg:path>`,
})
export class MynauiElevatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
