import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhResizesmallIcon],svg[whh-resizesmall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1005.856 822q19 19 19 46t-19 46l-91 92q-19 19-45.5 19t-45.5-19l-114-114l-133 133q-27 0-45.5-19t-18.5-45V576q0-26 18.5-45t45.5-19h384q26 0 45 19t19 45l-133 133zm-557-310h-383q-27 0-45.5-18.5T1.856 448l132-132l-114-113q-19-19-19-46t19-46l91-92q19-19 46-19t46 19l114 114l132-132q27 0 45.5 18.5t18.5 45.5v383q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhResizesmallIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
