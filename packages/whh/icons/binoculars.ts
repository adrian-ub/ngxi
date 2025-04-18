import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBinocularsIcon],svg[whh-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.343 640v256q0 53-37.5 90.5t-90.5 37.5h-128q-53 0-90.5-37.5t-37.5-90.5V512h-64q0 27-18.5 45.5t-45.5 18.5t-45.5-18.5t-18.5-45.5h-64v384q0 53-37.5 90.5t-90.5 37.5h-128q-53 0-90.5-37.5T.343 896V640q0-41 16.5-129.5t48-171.5t63.5-83V128q-26 0-45-18.5t-19-45t19-45.5t45-19h192q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5v146q29 17 46.5 46t17.5 64h64q0-27 18.5-45.5t45.5-18.5t45.5 19t18.5 45h64q0-35 17.5-64t46.5-46V128q-26 0-45-18.5t-19-45t19-45.5t45-19h192q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5v128q32 0 63.5 83t48 171.5t16.5 129.5"></svg:path>`,
})
export class WhhBinocularsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
