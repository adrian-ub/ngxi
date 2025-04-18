import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psLabelIcon],svg[ps-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M325 0H27Q17 0 11 6T5 21v465q0 9 6.5 15.5T27 508q7 0 15-5l121-106q4-4 15-4q7 0 15 4l122 106q4 5 15 5q8 0 14.5-6.5T351 486V21q-7-21-26-21m-21 439l-85-74q-15-15-43-15q-21 0-43 15l-85 74V43h256z"></svg:path>`,
})
export class PsLabelIcon {
  readonly viewBox = input("0 0 352 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
