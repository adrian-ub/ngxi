import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryEmptySolidIcon],svg[mynaui-battery-empty-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-17-4A1.75 1.75 0 0 0 2.25 8v8c0 .966.784 1.75 1.75 1.75h14A1.75 1.75 0 0 0 19.75 16V8A1.75 1.75 0 0 0 18 6.25z"></svg:path>`,
})
export class MynauiBatteryEmptySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
