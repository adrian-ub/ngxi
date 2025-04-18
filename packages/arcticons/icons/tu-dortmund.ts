import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTuDortmundIcon],svg[arcticons-tu-dortmund-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.341 7.978v27.433a4.61 4.61 0 0 0 4.61 4.61h3.384"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 15.586h15.558a3 3 0 0 1 3 3V30.8a9.22 9.22 0 0 0 9.22 9.22h0A9.22 9.22 0 0 0 42.5 30.8V15.586m0 15.215v9.221"></svg:path>`,
})
export class ArcticonsTuDortmundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
