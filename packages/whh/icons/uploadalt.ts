import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhUploadaltIcon],svg[whh-uploadalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896v-96q0-26 19-45t45-19t45 19t19 45v32q0 27 18.5 45.5T192 896h640q27 0 45.5-18.5T896 832v-32q0-26 19-45t45-19t45 19t19 45v96q0 53-37.5 90.5T896 1024m-21-640H640v320q0 27-18.5 45.5T576 768H448q-27 0-45.5-18.5T384 704V384H148q-15 0-18.5-6t8.5-19L479 14q14-14 33-14t33 14l341 345q12 13 8 19t-19 6"></svg:path>`,
})
export class WhhUploadaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
