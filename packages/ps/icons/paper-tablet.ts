import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPaperTabletIcon],svg[ps-paper-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 64h-21q-10-21-43-21h-64V21q0-21-21-21t-21 21v22h-64q-33 0-43 21H43q-18 0-30.5 13T0 109v360q0 18 12.5 30.5T43 512h298q18 0 30.5-13t12.5-32V109q0-19-12.5-32T341 64M117 85h150q10 0 10 11t-10 11H117q-10 0-10-11t10-11m224 384H43V107h21q1 5 4 12t14.5 18.5T107 149h170q36 0 43-42h21z"></svg:path>`,
})
export class PsPaperTabletIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
