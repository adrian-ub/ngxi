import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleExclude32FilledIcon],svg[fluent-table-simple-exclude-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2H12v10H2V6.5A4.5 4.5 0 0 1 6.5 2M2 14v5a4.5 4.5 0 0 0 4.5 4.5H12V14zm21.5-2V6.5A4.5 4.5 0 0 0 19 2h-5v10zM16 19a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3z"></svg:path>`,
})
export class FluentTableSimpleExclude32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
