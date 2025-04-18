import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFemaleRoundedIcon],svg[material-symbols-light-female-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 18.5H10q-.213 0-.356-.144t-.144-.357t.144-.356T10 17.5h1.5v-3.023q-1.917-.215-3.209-1.637Q7 11.417 7 9.489q0-2.083 1.459-3.536Q9.917 4.5 12 4.5t3.541 1.453T17 9.489q0 1.928-1.291 3.35q-1.292 1.423-3.209 1.638V17.5H14q.213 0 .356.144t.144.357t-.144.356T14 18.5h-1.5V20q0 .213-.144.356t-.357.144t-.356-.144T11.5 20zm.503-5q1.659 0 2.828-1.172Q16 11.155 16 9.497t-1.172-2.828T11.997 5.5T9.169 6.672Q8 7.845 8 9.503q0 1.659 1.172 2.828q1.173 1.169 2.831 1.169"></svg:path>`,
})
export class MaterialSymbolsLightFemaleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
