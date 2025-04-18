import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceNoDrugOrSubstanceIcon],svg[guidance-no-drug-or-substance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m13.251 16.5l-4.125 4.125s-1.438-.479-3.355-2.395m0 0c-1.916-1.917-2.395-3.355-2.395-3.355L7.5 10.75m-1.73 7.48L.5 23.5m14.376-8.624l5.75-5.75l-5.75-5.75l-5.75 5.75m13.416 1.916l-9.583-9.584M17.75 6.25l3.833-3.833M23.5 4.333L19.667.5m-7.666 5.75l1.916 1.917M6.25 12l1.917 1.917M.5.5l23 23"></svg:path>`,
})
export class GuidanceNoDrugOrSubstanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
