import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRadioactiveIcon],svg[whh-radioactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1023q-104 0-199-40.5t-163.5-109T40.5 710T0 511t40.5-198.5t109-163T313 40.5T512 0t199 40.5t163.5 109t109 163T1024 511t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-128V639q-34 0-63-17t-46-45L183 709q51 85 138.5 135.5T512 895m0-768q-103 0-190.5 51T183 314l220 132q17-29 46-46t63-17zm-.5 320q-26.5 0-45 19T448 511.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19M841 314L621 446q19 31 19 65t-18 64l222 128q52-89 52-192q0-106-55-197"></svg:path>`,
})
export class WhhRadioactiveIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
