import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLaptopMedicalIcon],svg[la-laptop-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6v13.563l-2.281 2.314A2.44 2.44 0 0 0 2 23.594A2.42 2.42 0 0 0 4.406 26h23.188A2.42 2.42 0 0 0 30 23.594a2.45 2.45 0 0 0-.719-1.719L27 19.562V6zm2 2h18v11H7zm8 2v3h-3v2h3v3h2v-3h3v-2h-3v-3zM6.437 21h19.125l2.313 2.281a.46.46 0 0 1 .125.313a.386.386 0 0 1-.406.406H4.406A.386.386 0 0 1 4 23.594c0-.11.047-.234.125-.313z"></svg:path>`,
})
export class LaLaptopMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
