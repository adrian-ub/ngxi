import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStep24RegularIcon],svg[fluent-step-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3.25c0-.69.56-1.25 1.25-1.25h5c.69 0 1.25.56 1.25 1.25v15.5A3.25 3.25 0 0 1 18.75 22H3.25C2.56 22 2 21.44 2 20.75v-5c0-.69.56-1.25 1.25-1.25H8V9.25C8 8.56 8.56 8 9.25 8h5.25zm1.5.25v4.75c0 .69-.56 1.25-1.25 1.25H9.5v5.25c0 .69-.56 1.25-1.25 1.25H3.5v4.5h15.25a1.75 1.75 0 0 0 1.75-1.75V3.5z"></svg:path>`,
})
export class FluentStep24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
