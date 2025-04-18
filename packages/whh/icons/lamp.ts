import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLampIcon],svg[whh-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M859 384H575q0 43 20 97t44 97.5t44 96.5t20 93q0 57-23.5 107.5T615 962q10 2 17 10.5t7 19.5q0 13-9.5 22.5T607 1024H287q-13 0-22.5-9.5T255 992q0-11 7-19.5t18-10.5q-42-36-65.5-86.5T191 768q0-41 20-94t44-96.5t44-97t20-96.5H127v288q0 13-9.5 22.5T95 704t-22.5-9.5T63 672V384H35q-20 0-29.5-14T3 337L246 22q3-9 15-15.5T287 0h330q13 0 25 6.5T657 22l236 315q6 19-4 33t-30 14"></svg:path>`,
})
export class WhhLampIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
