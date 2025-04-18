import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAirpodsIcon],svg[mynaui-airpods-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 18V8a3.5 3.5 0 1 0-3.5 3.5c.274-.006.5.214.5.488V18a1.5 1.5 0 0 0 3 0m4 0V8a3.5 3.5 0 1 1 3.5 3.5a.49.49 0 0 0-.5.488V18a1.5 1.5 0 0 1-3 0"></svg:path>`,
})
export class MynauiAirpodsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
