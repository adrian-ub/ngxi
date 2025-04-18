import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintBuildingIcon],svg[pepicons-print-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17 18.25h2a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h2V6.308C7 4.772 8.102 3.5 9.5 3.5h5c1.398 0 2.5 1.272 2.5 2.808z" clip-rule="evenodd" opacity=".2"></svg:path><svg:path d="M2.5 18.5a.5.5 0 0 1 0-1h16a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M6.5 17.5a.5.5 0 0 1-1 0V4.808C5.5 3.272 6.602 2 8 2h5c1.398 0 2.5 1.272 2.5 2.808V17.5a.5.5 0 0 1-1 0V4.808C14.5 3.795 13.811 3 13 3H8c-.811 0-1.5.795-1.5 1.808z"></svg:path><svg:path d="M8.5 4.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 8 6V5a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 11 6V5a.5.5 0 0 1 .5-.5m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 11 9V8a.5.5 0 0 1 .5-.5m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m-3-6h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 8 9V8a.5.5 0 0 1 .5-.5m0 6h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 8 15v-1a.5.5 0 0 1 .5-.5m0-3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 8 12v-1a.5.5 0 0 1 .5-.5"></svg:path></svg:g>`,
})
export class PepiconsPrintBuildingIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
