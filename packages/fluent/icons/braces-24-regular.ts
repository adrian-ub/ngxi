import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBraces24RegularIcon],svg[fluent-braces-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 5.75A2.75 2.75 0 0 1 7.25 3a.75.75 0 0 1 0 1.5C6.56 4.5 6 5.06 6 5.75v4.309c0 .744-.3 1.437-.802 1.941A2.75 2.75 0 0 1 6 13.941v4.309c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5a2.75 2.75 0 0 1-2.75-2.75v-4.308a1.25 1.25 0 0 0-.855-1.186l-.132-.045a.75.75 0 0 1 0-1.422l.132-.045c.51-.17.855-.647.855-1.185zm15 0A2.75 2.75 0 0 0 16.75 3a.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25v4.309c0 .744.3 1.437.802 1.941A2.75 2.75 0 0 0 18 13.941v4.309c0 .69-.56 1.25-1.25 1.25a.75.75 0 0 0 0 1.5a2.75 2.75 0 0 0 2.75-2.75v-4.308c0-.539.344-1.016.855-1.186l.132-.045a.75.75 0 0 0 0-1.422l-.132-.045a1.25 1.25 0 0 1-.855-1.185z"></svg:path>`,
})
export class FluentBraces24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
