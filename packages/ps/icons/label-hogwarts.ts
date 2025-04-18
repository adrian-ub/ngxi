import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psLabelHogwartsIcon],svg[ps-label-hogwarts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m42 501l121-106q4-5 15-5q5 0 15 5l122 106q4 5 15 5q8 0 14.5-6.5T351 484V21q0-9-6-15t-15-6H27Q17 0 11 6T5 21v465q0 9 6.5 15.5T27 508q8 0 15-7M261 43h43v396l-43-38zm-128 0h86v322q-15-15-43-15q-21 0-43 15zm-85 0h43v358l-43 38z"></svg:path>`,
})
export class PsLabelHogwartsIcon {
  readonly viewBox = input("0 0 352 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
