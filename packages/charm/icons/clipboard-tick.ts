import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmClipboardTickIcon],svg[charm-clipboard-tick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 1.75h4.5v3.5h-4.5zm4 11.05l1.5 1.5l3-2.5m-9-9h-2.5v11.5h4.5m6-5V2.8h-2.5"></svg:path>`,
})
export class CharmClipboardTickIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
