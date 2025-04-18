import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsReminderProIcon],svg[arcticons-reminder-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="28.066" cy="16.326" r="6.936" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.072 9.13c-.087 2.34.347 13.526 11.792 18.121c.433.174.954.26 1.474.26c3.034-.173 15-.26 19.075 6.157c.087.087.087.173.087.26v4.595c0 .26-.173.434-.433.434h-27.92c-.26 0-.434-.174-.434-.434v-7.977c0-.26-.086-.433-.346-.52c-1.734-1.214-11.186-7.543-9.711-20.983z"></svg:path>`,
})
export class ArcticonsReminderProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
