import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MailReminderIcon],svg[fluent-mdl2-mail-reminder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 384v640h-128V648l-896 447l-896-447v888h896v128H0V384zM1024 953l881-441H143zm576 199q66 0 124 25t101 69t69 102t26 124v192h128v128h-256v64q0 40-15 75t-41 61t-61 41t-75 15t-75-15t-61-41t-41-61t-15-75v-64h-256v-128h128v-192q0-66 25-124t68-101t102-69t125-26m64 640h-128v64q0 26 19 45t45 19t45-19t19-45zm128-128v-192q0-40-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75v192z"></svg:path>`,
})
export class FluentMdl2MailReminderIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
