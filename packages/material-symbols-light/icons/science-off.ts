import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScienceOffIcon],svg[material-symbols-light-science-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 11.31l-4-4V5H8.616q-.213 0-.357-.144t-.143-.357t.143-.356T8.616 4h6.769q.212 0 .356.144t.144.357t-.144.356t-.356.143H14zm5.223 9.482L18.431 20H5q-.639 0-.908-.57t.127-1.065L9.9 11.47L3.17 4.74l.707-.708l16.054 16.054z"></svg:path>`,
})
export class MaterialSymbolsLightScienceOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
