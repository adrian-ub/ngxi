import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psAlignLeftIcon],svg[ps-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 85h214q21 0 21-21t-21-21H21Q0 43 0 64t21 21m0 86h299q21 0 21-22q0-21-21-21H21q-9 0-15 6t-6 15q0 10 6 16t15 6m0 85h256q10 0 16-6t6-15q0-22-22-22H21q-9 0-15 6t-6 16q0 9 6 15t15 6m0 85h342q21 0 21-21t-21-21H21q-21 0-21 21t21 21"></svg:path>`,
})
export class PsAlignLeftIcon {
  readonly viewBox = input("0 0 384 448")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
