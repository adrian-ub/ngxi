import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoonPhaseIcon],svg[arcticons-moon-phase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:path d="M23.94 29.086a6.36 6.36 0 1 1 1.202-3.72h0q0 .627-.122 1.241"></svg:path><svg:circle cx="34.289" cy="16.917" r="3.064"></svg:circle><svg:circle cx="14.304" cy="13.125" r="2.002"></svg:circle><svg:circle cx="29.671" cy="9.321" r="1.472"></svg:circle><svg:ellipse cx="41.807" cy="22.725" rx=".985" ry="1.786"></svg:ellipse><svg:ellipse cx="40.144" cy="32.413" rx="1.019" ry="1.601"></svg:ellipse><svg:circle cx="27.569" cy="34.038" r="2.021"></svg:circle><svg:circle cx="19.893" cy="40.978" r="2.256"></svg:circle><svg:circle cx="9.335" cy="30.028" r="1.193"></svg:circle><svg:ellipse cx="19.073" cy="5.836" rx="1.601" ry=".8"></svg:ellipse><svg:circle cx="26.52" cy="39.261" r=".951"></svg:circle><svg:circle cx="19.273" cy="22.994" r="1.414"></svg:circle><svg:circle cx="25.173" cy="28.051" r="1.392"></svg:circle><svg:path d="M23.39 45.492c-4.656-6.134-7.19-13.718-7.19-21.532c0-7.749 2.492-15.276 7.08-21.385"></svg:path></svg:g>`,
})
export class ArcticonsMoonPhaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
