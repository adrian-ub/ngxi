import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[medicalIconIStairsIcon],svg[medical-icon-i-stairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.648 56.572h11.205V45.168h11.134V33.686h11.308v-11.27h11.233V11.222h16.677v5.711H52.118V28.17H40.872v11.397H29.65v11.336H18.383v11.432H1.648z"></svg:path>`,
})
export class MedicalIconIStairsIcon {
  readonly viewBox = input("0 0 63 64")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
