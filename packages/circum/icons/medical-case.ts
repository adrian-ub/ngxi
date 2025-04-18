import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumMedicalCaseIcon],svg[circum-medical-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.435 6.465h-1.43v-.9a2.5 2.5 0 0 0-2.5-2.5h-5a2.5 2.5 0 0 0-2.5 2.5v.9h-1.44a2.5 2.5 0 0 0-2.5 2.5v9.47a2.5 2.5 0 0 0 2.5 2.5h12.87a2.5 2.5 0 0 0 2.5-2.5v-9.47a2.5 2.5 0 0 0-2.5-2.5m-10.43-.9a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v.9h-8Zm11.93 12.87a1.5 1.5 0 0 1-1.5 1.5H5.565a1.5 1.5 0 0 1-1.5-1.5v-9.47a1.5 1.5 0 0 1 1.5-1.5h12.87a1.5 1.5 0 0 1 1.5 1.5Z"></svg:path><svg:path fill="currentColor" d="M14.505 13.675a.5.5 0 0 1-.5.5h-1.5v1.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5v-1.5h-1.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5h1.5v-1.5a.5.5 0 0 1 .5-.5a.51.51 0 0 1 .5.5v1.5h1.5a.51.51 0 0 1 .5.5"></svg:path>`,
})
export class CircumMedicalCaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
