import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmClipboardIcon],svg[charm-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.75 1.75h4.5v3.5h-4.5z"></svg:path><svg:path d="M5.25 2.75h-2.5v11.5h10.5V2.75h-2.5"></svg:path></svg:g>`,
})
export class CharmClipboardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
