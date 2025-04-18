import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrailLengthMediumIcon],svg[material-symbols-light-trail-length-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.116 16.5v-1h6.134q-.754-.54-1.187-1.32t-.54-1.68H5.5v-1h6.023q.087-.825.501-1.614T13.25 8.5H7.5v-1H16q1.868 0 3.184 1.316Q20.5 10.13 20.5 11.997t-1.316 3.185T16 16.5zm-3.616 0v-1h2.616v1z"></svg:path>`,
})
export class MaterialSymbolsLightTrailLengthMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
