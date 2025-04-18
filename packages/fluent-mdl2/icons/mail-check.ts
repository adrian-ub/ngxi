import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MailCheckIcon],svg[fluent-mdl2-mail-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1939 1363l90 90l-557 558l-269-270l90-90l179 178zm109-979v907q-32-32-65-63t-63-66V648l-896 447l-896-447v888h1099l-128 128H0V384zM1024 953l881-441H143z"></svg:path>`,
})
export class FluentMdl2MailCheckIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
