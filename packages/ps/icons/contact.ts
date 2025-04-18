import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psContactIcon],svg[ps-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 0h-64v4q-12-4-21-4H85Q68 0 55.5 12.5T43 43v64H21q-21 0-21 21t21 21h22v86H21q-21 0-21 21t21 21h22v86H21q-21 0-21 21t21 21h22v64q0 18 12.5 30.5T85 512h299q27 0 45.5-18.5T448 448v-85q27 0 45.5-18.5T512 299v-86h-4q4-12 4-21v-85h-4q4-14 4-22V43q0-18-12.5-30.5T469 0m-21 43h21v42q0 22-21 22zm0 106q9 0 21-4v47q0 21-21 21zm-43 299q0 21-21 21H85v-64h22q21 0 21-21t-21-21H85v-86h22q21 0 21-21t-21-21H85v-86h22q21 0 21-21t-21-21H85V43h299q21 0 21 21zm43-128v-64q9 0 21-4v47q0 21-21 21"></svg:path>`,
})
export class PsContactIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
