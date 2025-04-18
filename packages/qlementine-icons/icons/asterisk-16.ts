import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsAsterisk16Icon],svg[qlementine-icons-asterisk-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2.5a.5.5 0 0 0-1 0v3.79L4.35 3.64a.5.5 0 0 0-.707.707l2.65 2.65h-3.79a.5.5 0 0 0 0 1h3.79l-2.65 2.65a.5.5 0 0 0 .707.707L7 8.704v3.79a.5.5 0 0 0 1 0v-3.79l2.65 2.65a.5.5 0 0 0 .707-.707l-2.65-2.65h3.79a.5.5 0 0 0 0-1h-3.79l2.65-2.65a.5.5 0 0 0-.707-.707L8 6.29z"></svg:path>`,
})
export class QlementineIconsAsterisk16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
