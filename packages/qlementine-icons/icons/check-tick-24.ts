import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsCheckTick24Icon],svg[qlementine-icons-check-tick-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.8 6.2a.75.75 0 0 1 .04 1.06l-9.75 10.5a.75.75 0 0 1-1.117-.02l-4.75-5.5a.753.753 0 0 1 1.137-.983l4.2 4.87l9.18-9.89a.75.75 0 0 1 1.06-.039z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsCheckTick24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
