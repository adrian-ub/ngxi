import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLaptopMacIcon],svg[zmdi-laptop-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 320h85q0 18-12.5 30.5T469 363H43q-18 0-30.5-12.5T0 320h85q-17 0-29.5-12.5T43 277V43q0-18 12.5-30.5T85 0h342q17 0 29.5 12.5T469 43v234q0 18-12.5 30.5T427 320M85 43v234h342V43zm171 298q9 0 15-6t6-15t-6-15t-15-6t-15 6t-6 15t6 15t15 6"></svg:path>`,
})
export class ZmdiLaptopMacIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
