import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiClockHandIcon],svg[mynaui-clock-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.147 3v9l6 3"></svg:path>`,
})
export class MynauiClockHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
