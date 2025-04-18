import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineScannerBarCodeSolidIcon],svg[streamline-scanner-bar-code-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.419.136a1.22 1.22 0 0 0-1.22 1.22V5.12a.75.75 0 0 0 1.5 0V1.636H5.18a.75.75 0 1 0 0-1.5zm7.525 0a.75.75 0 0 0 0 1.5h3.483v3.483a.75.75 0 0 0 1.5 0V1.356a1.22 1.22 0 0 0-1.22-1.22H8.943Zm4.233 7.995a.75.75 0 0 1 .75.75v3.763a1.22 1.22 0 0 1-1.22 1.22H8.943a.75.75 0 0 1 0-1.5h3.483V8.881a.75.75 0 0 1 .75-.75Zm-11.479.75a.75.75 0 1 0-1.5 0v3.763a1.22 1.22 0 0 0 1.22 1.22h3.763a.75.75 0 0 0 0-1.5H1.698zm8.972-5.598c.346 0 .625.28.625.625v6.184a.625.625 0 0 1-1.25 0V3.908c0-.345.28-.625.625-.625m-7.961.625a.625.625 0 0 1 1.25 0v6.184a.625.625 0 0 1-1.25 0zm5.72-.625c.346 0 .626.28.626.625v3.608a.625.625 0 1 1-1.25 0V3.908c0-.345.28-.625.625-.625Zm-.624 6.81a.625.625 0 0 0 1.25 0V9.81a.625.625 0 1 0-1.25 0v.281Zm-1.98-6.81c.344 0 .624.28.624.625v3.608a.625.625 0 1 1-1.25 0V3.908c0-.345.28-.625.625-.625Zm-.626 6.81a.625.625 0 0 0 1.25 0V9.81a.625.625 0 1 0-1.25 0v.281Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineScannerBarCodeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
