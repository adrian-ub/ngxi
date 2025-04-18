import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCreatefileIcon],svg[whh-createfile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M831.973 1024h-767q-27 0-45.5-18.5T.973 960V65q0-26 19-45t45-19h448v352q0 13 9 22.5t23 9.5h351v574q0 27-18.5 45.5t-45.5 18.5zm-255-384h-128V512q0-26-19-44.5t-45.5-18.5t-45 18.5t-18.5 44.5v128h-128q-27 0-45.5 19t-18.5 45t18.5 44.5t45.5 18.5h128v128q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5V767h128q26 0 45-18.5t19-44.5t-19-45t-45-19m0-640q21 0 44 19l256 257q19 19 19 46h-319z"></svg:path>`,
})
export class WhhCreatefileIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
