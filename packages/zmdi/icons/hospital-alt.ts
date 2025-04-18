import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiHospitalAltIcon],svg[zmdi-hospital-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 91v42l-43 128l43 128v43H0v-43l43-128L0 133V91h271l31-86l50 19l-24 67zM277 283v-43h-64v-64h-42v64h-64v43h64v64h42v-64z"></svg:path>`,
})
export class ZmdiHospitalAltIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
