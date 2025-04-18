import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMedicalCrossSignHealthcareSolidIcon],svg[streamline-medical-cross-sign-healthcare-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 0a.5.5 0 0 0-.5.5v4h-4A.5.5 0 0 0 0 5v4a.5.5 0 0 0 .5.5h4v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4h4A.5.5 0 0 0 14 9V5a.5.5 0 0 0-.5-.5h-4v-4A.5.5 0 0 0 9 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMedicalCrossSignHealthcareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
