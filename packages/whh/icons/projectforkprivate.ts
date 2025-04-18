import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhProjectforkprivateIcon],svg[whh-projectforkprivate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.553 384h-256q-13 0-22.5-9.5t-9.5-22.5V128q0-53 47-90.5t113-37.5t113 37.5t47 90.5v224q0 13-9.5 22.5t-22.5 9.5m-128-320q-40 0-68 18.5t-28 45.5v64h192v-64q0-27-28-45.5t-68-18.5m-665 727q57 39 57 105q0 53-37.5 90.5t-90.5 37.5t-90.5-37.5T.553 896q0-35 17.5-64t46.5-46V64q0-26 18.5-45t45.5-19t45.5 19t18.5 45v370q78-122 194-201.5t254-104.5v128q-174 39-294.5 183t-146.5 352m-70.5 41q-26.5 0-45.5 18.5t-19 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45-18.5"></svg:path>`,
})
export class WhhProjectforkprivateIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
