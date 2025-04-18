import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMedicalSearchDiagnosisIcon],svg[streamline-medical-search-diagnosis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.478 12.207a5.729 5.729 0 1 0 0-11.457a5.729 5.729 0 0 0 0 11.457m6.772 1.043l-2.722-2.723"></svg:path><svg:path d="M5.666 3.26a.5.5 0 0 0-.5.5v1.406H3.759a.5.5 0 0 0-.5.5v1.625a.5.5 0 0 0 .5.5h1.407v1.407a.5.5 0 0 0 .5.5H7.29a.5.5 0 0 0 .5-.5V7.79h1.406a.5.5 0 0 0 .5-.5V5.666a.5.5 0 0 0-.5-.5H7.791V3.76a.5.5 0 0 0-.5-.5z"></svg:path></svg:g>`,
})
export class StreamlineMedicalSearchDiagnosisIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
