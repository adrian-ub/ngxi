import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhResizefullIcon],svg[whh-resizefull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-383q-27 0-45.5-18.5t-18.5-45.5l135-135l-149-145q-18-19-18-45.5t18-45.5l92-91q18-18 45-18t46 18l147 145l131-130q27 0 45.5 18.5t18.5 45.5v383q0 27-18.5 45.5t-45.5 18.5m-526-498q-19 19-45.5 19t-45.5-19l-148-145l-131 131q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h384q27 0 45.5 18.5t18.5 45.5l-135 135l149 146q19 18 19 45t-19 45z"></svg:path>`,
})
export class WhhResizefullIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
