import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimple32FilledIcon],svg[fluent-table-simple-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 29h7.5a4.5 4.5 0 0 0 4.5-4.5V17H17zm0-14h12V7.5A4.5 4.5 0 0 0 24.5 3H17zM15 3v12H3V7.5A4.5 4.5 0 0 1 7.5 3zm0 14v12H7.5A4.5 4.5 0 0 1 3 24.5V17z"></svg:path>`,
})
export class FluentTableSimple32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
