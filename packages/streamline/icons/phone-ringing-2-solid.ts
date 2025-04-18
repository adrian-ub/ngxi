import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneRinging2SolidIcon],svg[streamline-phone-ringing-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.536 2.582c0-.045.036-.082.081-.082H7.44c.046 0 .082.037.082.082v9.149a.08.08 0 0 1-.082.081H1.617a.08.08 0 0 1-.081-.081V2.58ZM1.617 1C.744 1 .036 1.708.036 2.582v9.149c0 .873.708 1.581 1.581 1.581H7.44c.874 0 1.582-.708 1.582-1.581V2.58A1.583 1.583 0 0 0 7.44 1zm2.495 8.733a.75.75 0 1 0 0 1.5h.832a.75.75 0 0 0 0-1.5zm7.638-.223c1.134-1.292 1.134-3.416 0-4.707a.625.625 0 0 1 .94-.825c1.547 1.764 1.547 4.593 0 6.356a.625.625 0 1 1-.94-.824M9.864 5.75c.249.362.392.868.392 1.405s-.143 1.044-.392 1.405a.625.625 0 0 0 1.028.71c.421-.61.614-1.378.614-2.115s-.193-1.504-.614-2.115a.625.625 0 0 0-1.028.71" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePhoneRinging2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
