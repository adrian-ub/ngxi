import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psAlignRightIcon],svg[ps-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 85q21 0 21-21t-21-21H149q-21 0-21 21t21 21zM43 149q0 22 21 22h299q9 0 15-6t6-16q0-9-6-15t-15-6H64q-21 0-21 21m320 64H107q-22 0-22 22q0 9 6 15t16 6h256q9 0 15-6t6-15q0-10-6-16t-15-6M0 320q0 21 21 21h342q21 0 21-21t-21-21H21q-21 0-21 21"></svg:path>`,
})
export class PsAlignRightIcon {
  readonly viewBox = input("0 0 384 448")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
