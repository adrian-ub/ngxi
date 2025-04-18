import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiKqlFieldIcon],svg[oui-kql-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9a5 5 0 1 1 0-8a5 5 0 1 1 0 8m.75-.692a4 4 0 1 0 0-6.615A4.98 4.98 0 0 1 10 5a4.98 4.98 0 0 1-1.25 3.308M4.133 8V5.559h2.496v-.625H4.133V2.996h2.719v-.633H3.43V8z"></svg:path>`,
})
export class OuiKqlFieldIcon {
  readonly viewBox = input("0 0 16 10")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
