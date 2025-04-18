import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShieldPersonRoundedIcon],svg[material-symbols-light-shield-person-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.5q1.258 0 2.129-.871T15 9.5t-.871-2.129T12 6.5t-2.129.871T9 9.5t.871 2.129T12 12.5m0 7.4q1.34-.437 2.43-1.305t1.882-2.028q-.999-.511-2.084-.789Q13.142 15.5 12 15.5t-2.228.278t-2.084.79q.793 1.159 1.882 2.027q1.09.869 2.43 1.305m0 .942q-.136 0-.287-.025t-.28-.075Q8.48 19.617 6.74 16.926T5 11.1V6.817q0-.51.295-.923t.755-.6l5.385-2q.292-.106.565-.106t.566.106l5.384 2q.46.187.755.6t.295.923V11.1q0 3.135-1.74 5.826t-4.693 3.816q-.13.05-.28.075t-.287.025"></svg:path>`,
})
export class MaterialSymbolsLightShieldPersonRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
