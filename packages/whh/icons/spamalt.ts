import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSpamaltIcon],svg[whh-spamalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M724 1024H300L0 724V300L300 0h424l300 300v424zM576 160q0-13-9.5-22.5T544 128h-64q-13 0-22.5 9.5T448 160v448q0 13 9.5 22.5T480 640h64q13 0 22.5-9.5T576 608zm0 640q0-13-9.5-22.5T544 768h-64q-13 0-22.5 9.5T448 800v64q0 13 9.5 22.5T480 896h64q13 0 22.5-9.5T576 864z"></svg:path>`,
})
export class WhhSpamaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
