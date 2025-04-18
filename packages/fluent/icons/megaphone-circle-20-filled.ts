import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMegaphoneCircle20FilledIcon],svg[fluent-megaphone-circle-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M7 12.023l-1.171-.418A1.25 1.25 0 0 1 5 10.427v-.85c0-.529.332-1 .829-1.178l6.501-2.325a1.25 1.25 0 0 1 1.671 1.177v5.502a1.25 1.25 0 0 1-1.67 1.177l-1.379-.493A2 2 0 0 1 7 13zm2.996 1.072A1 1 0 0 1 8 13v-.619z"></svg:path>`,
})
export class FluentMegaphoneCircle20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
