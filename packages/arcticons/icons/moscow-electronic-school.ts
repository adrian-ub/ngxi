import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoscowElectronicSchoolIcon],svg[arcticons-moscow-electronic-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5" transform="rotate(-88.777 24 24)"></svg:circle><svg:path d="m28.871 13.733l5.396 5.396l-2.732 2.733l-5.397-5.397M31.603 11L37 16.397l-2.733 2.732M20.414 24.24c-.274-.957 0-2.05.751-2.802h0c1.161-1.161 3.006-1.093 4.099 0l1.366 1.367c1.161 1.16 1.093 3.005 0 4.098h0c-.751.752-1.844 1.025-2.8.752m2.117-5.534l-2.528 2.528M16.397 37L11 31.603l8.129 2.664l-2.664-8.129l5.397 5.397"></svg:path></svg:g>`,
})
export class ArcticonsMoscowElectronicSchoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
