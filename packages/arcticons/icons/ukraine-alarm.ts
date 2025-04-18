import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUkraineAlarmIcon],svg[arcticons-ukraine-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.173 20.124h4.878v7.752h-4.878z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.051 27.876c7.697 0 12.533 3.364 17.748 8.075V12.05c-5.215 4.71-10.051 8.075-17.748 8.075M33.8 27.028a3.028 3.028 0 1 0 0-6.056m-22.627 6.904v13.379"></svg:path>`,
})
export class ArcticonsUkraineAlarmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
