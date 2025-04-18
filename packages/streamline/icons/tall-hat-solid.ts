import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTallHatSolidIcon],svg[streamline-tall-hat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.127.167A.5.5 0 0 1 2.5 0h9a.5.5 0 0 1 .497.557l-.96 8.317H2.963L2.003.557a.5.5 0 0 1 .124-.39m.98 9.957l.275 2.376H.774a.75.75 0 0 0 0 1.5h12.452a.75.75 0 0 0 0-1.5h-2.608l.274-2.376z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTallHatSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
