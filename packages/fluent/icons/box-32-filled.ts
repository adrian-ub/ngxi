import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBox32FilledIcon],svg[fluent-box-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.615 2.55a4.5 4.5 0 0 0-3.23 0L11.3 3.736l13 5l4.485-1.725a3.3 3.3 0 0 0-.868-.499zm3.9 7.258l-13.001-5l-4.43 1.704q-.481.186-.87.5L16 11.928zM2 9.545q0-.422.105-.818L15 13.687v15.95a4.5 4.5 0 0 1-.615-.187L4.083 25.488A3.25 3.25 0 0 1 2 22.455zM17.615 29.45q-.302.117-.615.188V13.687l12.895-4.96q.104.396.105.818v12.91a3.25 3.25 0 0 1-2.083 3.033z"></svg:path>`,
})
export class FluentBox32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
