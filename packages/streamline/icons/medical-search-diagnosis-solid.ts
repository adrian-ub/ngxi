import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMedicalSearchDiagnosisSolidIcon],svg[streamline-medical-search-diagnosis-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 1.5a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M0 6.25a6.25 6.25 0 1 1 11.32 3.656l2.387 2.387a1 1 0 0 1-1.414 1.414L9.906 11.32A6.25 6.25 0 0 1 0 6.25m5.438-3.22a.5.5 0 0 0-.5.5v1.406H3.53a.5.5 0 0 0-.5.5v1.625a.5.5 0 0 0 .5.5h1.406V8.97a.5.5 0 0 0 .5.5h1.625a.5.5 0 0 0 .5-.5V7.562H8.97a.5.5 0 0 0 .5-.5V5.437a.5.5 0 0 0-.5-.5H7.563V3.531a.5.5 0 0 0-.5-.5H5.438Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMedicalSearchDiagnosisSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
