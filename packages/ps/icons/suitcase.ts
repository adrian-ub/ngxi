import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psSuitcaseIcon],svg[ps-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 107h-85V64q0-27-18.5-45.5T299 0h-86q-27 0-45.5 18.5T149 64v43H64q-27 0-45.5 18T0 171v277q0 27 18.5 45.5T64 512h384q27 0 45.5-18.5T512 448V171q0-28-18.5-46T448 107M192 64q0-21 21-21h86q21 0 21 21v43H192zM64 469q-21 0-21-21V171q0-22 21-22h21v320zm64 0V149h256v320zm341-21q0 21-21 21h-21V149h21q21 0 21 22z"></svg:path>`,
})
export class PsSuitcaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
